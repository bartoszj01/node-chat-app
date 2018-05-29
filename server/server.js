const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 3000;

// app.get('', (req, res) => {
//     res.sendfile('public/index.html', publicPath);
// });

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};