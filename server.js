const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fantasy-soccer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log(err);
});

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static file serving
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/teams', (req, res) => {
  Team.find()
    .populate('players')
    .populate('user')
    .exec((err, teams) => {
      if (err) return res.status(500).send(err);
      res.send(teams);
    });
});

app.post('/api/teams', (req, res) => {
  const team = new Team(req.body);
  team.save((err) => {}

)})