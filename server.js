var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Episode = require('./api/models/episode.model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
//fun comments
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Test'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/episode.route'); //importing route
routes(app); //register the route


app.listen(8080, '172.31.30.12');


console.log('Got that listening going on for this port: ' + 8080);

process.on('SIGINT', function() {
  mongoose.connection.close();
  //Put any cleanup i need here
  //fun comments
});
