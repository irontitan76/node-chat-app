const path = require('path');
const express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});

module.exports = {app};
