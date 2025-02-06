const express = require('express');
const app = express();

//ejs setup
app.set('view engine', 'ejs');

// middleware
app.use(function(req, res, next) {
    console.log("Middle Working")
    next();
});
app.get('/', function(req, res) {
  res.render('index');
})
app.get('/profile', function(req, res) {
  res.send('Hello Profile');
})
app.get('/profile/:username', function(req, res) {
  res.send(`Hello ${req.params.username}`);
})

app.listen(3000);