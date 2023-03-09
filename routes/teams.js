const express = require('express');
const router = express.Router();

const {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
  addPlayerToTeam,
  updatePlayerInTeam,
  removePlayerFromTeam,
} = require('../controllers/teams');

// GET all teams
router.get('/', getTeams);

// GET a single team
router.get('/:id', getTeam);

// POST a new team
router.post('/', createTeam);

// PUT (update) an existing team
router.put('/:id', updateTeam);

// DELETE an existing team
router.delete('/:id', deleteTeam);

// POST (add) a new player to a team
router.post('/:teamId/players', addPlayerToTeam);

// PUT (update) an existing player in a team
router.put('/:teamId/players/:playerId', updatePlayerInTeam);

// DELETE an existing player from a team
router.delete('/:teamId/players/:playerId', removePlayerFromTeam);

module.exports = router;