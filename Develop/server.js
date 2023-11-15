// required dependecies
const express = require('express');

//create express app
const app = express();

// create port
const PORT = process.env.PORT || 3000;

// set up express
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes)
const htmlRoutes = require("./routes/htmlRoutes");
app.use("/", htmlRoutes)


// create server listener
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
});