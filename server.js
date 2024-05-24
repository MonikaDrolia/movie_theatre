const express = require("express");

const userRoutes = require('./routes/users.js')
const showRoutes = require('./routes/shows.js')

const app = express();

app.use(express.json())
app.use('/users', userRoutes)
app.use('/shows', showRoutes)


const port = 3000;

app.listen(port, function(){
    console.log("listening on port" + port)
});

