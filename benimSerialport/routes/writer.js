const SerialPort = require("serialport");

const port = new SerialPort("COM1")


// port.write(JSON.stringify());
// port.on("data", (line) => console.log(JSON.parse(line.toString("utf8"))));


module.exports = port
