import http from 'http';
const server = http.createServer((req, res) => {
  res.end();
}).listen(3000);
console.log('Bienvenidos');
export default server;

