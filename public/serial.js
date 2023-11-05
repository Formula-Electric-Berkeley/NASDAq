const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

var device;

async function pollPorts() {
  await SerialPort.list().then((ports, err) => {
    for (i in ports) {
      if (ports[i].manufacturer == "FTDI" && !device) {
        device = new SerialPort({
          path: ports[i].path,
          baudRate: 9600,
        })

        const parser = device.pipe(new ReadlineParser({ delimiter: '\n' }))
        parser.on('data', console.log)
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
