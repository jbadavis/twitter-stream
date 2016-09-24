var app = require('./app/app');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var twitter = require('./app/twitter');

io.on("connection", function (socket) {
    console.log('Connected');

    var topic = socket.handshake.query.topic;
    var stream = twitter.stream('statuses/filter', { track: topic });

	stream.on('tweet', function (tweet) {
		socket.emit("tweet", tweet.text);
	});
});

server.listen(3000);
