const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const database = new sqlite3.Database('./public/db.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
});

const device = new SerialPort({
    path: '/dev/tty.usbserial-A50285BI',
    baudRate: 9600,
})

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    if (arg.substr(0, 3) === "sql") {
        database.all(sql.slice(4), (err, rows) => {
            event.reply('asynchronous-reply', (err && err.message) || rows);
        });
    } else {
        console.log("arg", arg)
        const parser = device.pipe(new ReadlineParser({ delimiter: '\n' }))
        parser.on('data', function(data) {
            database.run(`INSERT INTO serial_data (data) VALUES(?)`, [data], function(err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`A row has been inserted with rowid ${this.lastID} and data ${data}`);
            });

            console.log('>', data)
        })
    }
});

async function listSerialPorts() {
    await SerialPort.list().then((ports, err) => {
        if (err)
            console.log(err);
        console.log('ports', ports);
    })
}

