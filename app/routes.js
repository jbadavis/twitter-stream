var express = require('express');
var twitter = require('./twitter')

var router = express.Router();

router.get('/', function(req, res){
    res.render('index');
});

module.exports = router;


// var express = require('express');
// var exphbs  = require('express-handlebars');
// var routes = require('./app/routes.js');
//
// var app = express();
// var port = process.env.PORT || 3000;
//
// app.use(express.static('public'));
//
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
//
// app.use('/', routes);
//
// app.listen(port);
//
// module.exports = app;


//
// io.on("connection", function (socket) {
// 	console.log('Site connected!');
//
// 	stream_1.on('tweet', function (tweet) {
// 		socket.emit("tweet", tweet.text);
// 	});
// });
//
// server.listen(8080, function() {
// 	console.log('Listening - ', 8080);
// });

// var stream_1 = twitter.stream('statuses/filter', { track: 'daqri' });
//
// var io = require('socket.io')(app.listen(port););
