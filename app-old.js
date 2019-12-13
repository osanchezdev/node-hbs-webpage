const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
      nombre: 'Oscar',
      edad: 32,
      url: req.url
    };

    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();
  })
  .listen(8080);

console.log('Servidor escuchando en http://127.0.0.1:8080');
