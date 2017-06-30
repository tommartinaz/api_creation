var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
var authors = require('./routes/authorRoutes');
var books = require('./routes/bookRoutes');
var genres = require('./routes/genreRoutes');
var publishers = require('./routes/publisherRoutes');
var details = require('./routes/detailRoutes');

var index = require('./routes/indexRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/books', books);
app.use('/genres', genres);
app.use('/authors', authors);
app.use('/publishers', publishers);
app.use('/details', details);

app.listen(port, function() {
console.log("listening on port: ", port);
})
