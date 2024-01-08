//index.js
const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();
const port = 8080;




// API 요청 시 처리 라우터
app.use('/api', apiRoutes);

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/pages/home.html');
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}) 

