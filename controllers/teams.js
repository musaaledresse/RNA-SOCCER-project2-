const Team = require('../models/team');

function getTeam(req, res) {
  Team.findById(req.params.id, function(err, team) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(team);
    }
  });
}

function createTeam(req, res) {
  const newTeam = new Team(req.body);
  newTeam.save(function(err, team) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(team);
    }
  });
}

function updateTeam(req, res) {
  Team.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    team
  ) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(team);
    }
  });
}

function deleteTeam(req, res) {
  Team.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Team successfully deleted' });
    }
  });
}

module.exports = {
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam
};
