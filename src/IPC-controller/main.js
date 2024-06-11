const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const database = new sqlite3.Database('./public/db.sqlite3', (err) => {
    if (err) console.error('Database opening error: ', err);
});

const device = new SerialPort({
    path: '/dev/tty.usbserial-AB0PUOGD',
    baudRate: 115200,
})

let testGraphData = [0,1,2,3,4,5,6,7,8,9]
let testTempData = [0,4,2,5,4,6,6,10,8,9]
let testVoltageData = [3,1,2,7,4,6,8,7,8,9]

const parser = device.pipe(new ReadlineParser({ delimiter: '\n' }))
parser.on('data', function(data) {
    //     database.run(`INSERT INTO serial_data (data) VALUES(?)`, [data], function(err) {
    //         if (err) {
    //             return console.log(err.message);
    //         }
    // 
    //         console.log(`A row has been inserted with rowid ${this.lastID} and data ${data}`);
    //     });
    // 
    // testGraphData.shift()
    // testGraphData.push(parseInt(data.charAt(data.length - 1)));

    if (data.charAt(0) === 'T') {
        testTempData.push(data.substr(2))
    }

    if (data.charAt(0) === 'V') {
        testVoltageData.push(data.substr(2))
    }

    console.log('>', data)
})

ipcMain.on('asynchronous-message', (event, arg) => {
    // const sql = arg;
    // if (arg.substr(0, 3) === "sql") {
    //     database.all(sql.slice(4), (err, rows) => {
    //         event.reply('asynchronous-reply', (err && err.message) || rows);
    //     });
    // }

    if (arg.substr(0, 4) === "PING") {
        event.reply('asynchronous-reply', "PONG");
    }

    if (arg.substr(0, 5) === "TDATA") {
        event.reply('asynchronous-reply', testTempData);
    }

    if (arg.substr(0, 5) === "VDATA") {
        event.reply('asynchronous-reply', testVoltageData);
    }

    // {
    //     event.reply('asynchronous-reply', "INVALID REQUEST KEY");
    // }
});

async function listSerialPorts() {
    await SerialPort.list().then((ports, err) => {
        if (err)
            console.log(err);
        console.log('ports', ports);
    })
}

