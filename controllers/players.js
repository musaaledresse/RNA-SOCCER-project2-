// POST (add) a new player to a team
exports.addPlayerToTeam = (req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      if (err) return res.status(500).send(err);
      if (!team) return res.status(404).send('Team not found');
      const player = new Player(req.body);
      player.save((err) => {
        if (err) return res.status(500).send(err);
        team.players.push(player);
        team.save((err) => {
          if (err) return res.status(500).send(err);
          res.send(team);
        });
      });
    });
  };
  
  // PUT (update) an existing player in a team
  exports.updatePlayerInTeam = (req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      if (err) return res.status(500).send(err);
      if (!team) return res.status(404).send('Team not found');
      Player.findByIdAndUpdate(req.params.playerId, req.body, { new: true }, (err, player) => {
        if (err) return res.status(500).send(err);
        if (!player) return res.status(404).send('Player not found');
        res.send(team);
      });
    });
  };
  
  // DELETE an existing player from a team
  exports.removePlayerFromTeam = (req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      if (err) return res.status(500).send(err);
      if (!team) return res.status(404).send('Team not found');
      Player.findByIdAnd}
   ) }