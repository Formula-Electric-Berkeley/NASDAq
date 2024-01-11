const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS serial_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT
    )
  `);
});

function insertData(data) {
    //console.log(`\n${String(data)}\n`)
    const stmt = db.prepare('INSERT INTO serial_data (data) VALUES (?)');
    stmt.run(data);
    stmt.finalize();
}

function getAllData() {
    db.each("SELECT * FROM serial_data", (err, row) => {
        console.log(`\n${row.data}\n`);
    });
}

var device;

async function pollPorts() {
    await SerialPort.list().then((ports, err) => {
        for (let i in ports) {
            if (ports[i].manufacturer == "FTDI" && !device) {
                device = new SerialPort({
                    path: ports[i].path,
                    baudRate: 9600,
                })

                const parser = device.pipe(new ReadlineParser({ delimiter: '\n' }))
                parser.on('data', handleRx)
            }
        }
    })
}

function connect() {
    pollPorts();
    setTimeout(connect, 2000);
}

setTimeout(connect, 2000);

pollPorts()

function handleRx(data) {
    insertData(data)
    getAllData()
}

