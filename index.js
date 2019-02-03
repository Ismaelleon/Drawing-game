const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	})
});

io.on('connection', (socket) => {
	socket.on('draw', (data) => {
		io.emit('draw', data);
	});
	socket.on('chat', (msg) => {
		io.emit('chat', msg);
	});
});

http.listen(8080, function(){
	console.log('listening on *:8080');
});