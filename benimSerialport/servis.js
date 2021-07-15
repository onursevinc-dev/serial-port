const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

// Router middleware
const mainRoutes = require("./routes")
app.use('/api', mainRoutes)

app.listen(port, () => {
    console.log("Listen Port", port)
})
