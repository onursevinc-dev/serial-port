const router = require("express").Router();

const reader = require("./reader");
const writer = require("./writer");

// router.get('/', (req, res) => {
//     res.json({
//         message: "Get oldu"
//     })
// });

router.post('/', (req, res) => {
    function veriAl(line) {
        console.log("line verisi ", line);
    }
    writer.write(JSON.stringify(req.body));
    reader.on('data', function (data) {
        console.log('Data:', data, data.toString('utf8'));
    })
    console.log("-_-");
    // console.log("1");
    // reader.on("data",  (line) => veriAl(JSON.parse(line.toString("utf8"))))
    // let rData = reader.on("data",  (line) => veriAl(JSON.parse(line.toString("utf8"))))
    // let pool = rData._pool
    // res.json({
    //     pool
    // })
    res.json({
        message: req.body.inpData,
        data: "-_-"
    })
});


module.exports = router;
