const express = require('express');
const app = express();
const port = 8000;
app.use(express.static( __dirname + '/weather-api/dist' ));


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});