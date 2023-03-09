const Player = require('../models/player');

function getPlayer(req, res) {
  Player.findById(req.params.id, function(err, player) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(player);
    }
  });
}

function createPlayer(req, res) {
  const newPlayer = new Player(req.body);
  newPlayer.save(function(err, player) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(player);
    }
  });
}

function updatePlayer(req, res) {
  Player.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    player
  ) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(player);
    }
  });
}

function deletePlayer(req, res) {
  Player.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Player successfully deleted' });
    }
  });
}

module.exports = {
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer
};
