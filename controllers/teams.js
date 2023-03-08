const Team = require('../models/team');

// GET all teams
exports.getTeams = (req, res) => {
    Team.find()
      .populate('players')
      .populate('user')
      .exec((err, teams) => {
        if (err) return res.status(500).send(err);
        res.send(teams);
      });
  };
  
  // GET a single team
  exports.getTeam = (req, res) => {
    Team.findById(req.params.id)
      .populate('players')
      .populate('user')
      .exec((err, team) => {
        if (err) return res.status(500).send(err);
        if (!team) return res.status(404).send('Team not found');
        res.send(team);
      });
  };
  
  // POST a new team
  exports.createTeam = (req, res) => {
    const team = new Team(req.body);
    team.save((err) => {
      if (err) return res.status(500).send(err);
      res.send(team);
    });
  };
  
  // PUT (update) an existing team
  exports.updateTeam = (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('players')
      .populate('user')
      .exec((err, team) => {
        if (err) return res.status(500).send(err);
        if (!team) return res.status(404).send('Team not found');
        res.send(team);
      });
  };
  
  // DELETE an existing team
  exports.deleteTeam = (req, res) => {
    Team.findByIdAndDelete(req.params.id, (err, team) => {
      if (err) return res.status(500).send(err);
      if (!team) return res.status(404).send('Team not found');
      res.send('Team deleted successfully');
    });
  };