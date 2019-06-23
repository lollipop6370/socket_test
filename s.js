const express = require('express');
const app = express();

const server = require('http').Server(app);
//const io = require('socket.io')(server);

var HOST = '127.0.0.1'; // 定義伺服器位址
var PORT = 8000; // 定義 Port


server.on('listening', function(){
  console.log('Server is listening on port', PORT);

  // 如需 IP 位址等資訊，可藉由以下方式來取得
  var addr = server.address();
  console.log('%j', addr); // {"address":"127.0.0.1","family":"IPv4","port":8877}
});

server.on('connection', function(socket){
  console.log('Server has a new connection');
  console.log(socket.address()); // 此方法與 server.address() 得到的結果會是一致的，因為 socket.address() 方法鎖定的就是伺服器的 IP 位址
  console.log(socket.localAddress); // 取得 server 的 IP：127.0.0.1
  console.log(socket.localPort); // 取得 server 的 PORT：8877
  console.log('client 端的 IP：' + socket.remoteAddress); // client 端的 IP：127.0.0.1
  console.log('client 端的 PORT：' + socket.remotePort); // client 端的 PORT：61929

  socket.on('data', function(data){

    
  });

  
});


server.on('close', function(){
  console.log('Server is now closed');
});

server.listen(PORT, HOST);
