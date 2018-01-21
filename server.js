var express = require('express'); // ищет пакет в node_modules
var app = express(); // функционал веб сервера

app.use(express.static('src/client'));

app.listen(3333, function() {
  console.log('Listening on 3333...')
})
