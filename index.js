const express = require('express');
var morgan = require('morgan');
const app = express();
const port = 3000
app.use(morgan('combined'))
//route: định nghĩa tuyến đường
app.get('/', (req, res) => {
 var a = 1;
 var b = 2;
 var c = a + b;
 return res.send('Hello World!')
})
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})