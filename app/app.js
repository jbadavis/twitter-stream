var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./routes');

var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

module.exports = app;
