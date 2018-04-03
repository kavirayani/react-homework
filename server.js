var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080


app.get('/', function(req, res) {
    res.send('good question Paul!')
})
app.get('/api/articles', function(req, res) {
    res.send('articles will go here.')
})

app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`)
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nytSchema = new Schema({
  title:  String,
 
  body:   String,
  comments: [{ body: String, date: Date }],
  
  url: String,
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});