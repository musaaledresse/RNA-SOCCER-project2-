const express = require('express');
const router = express.Router();

const {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require('../controllers/players');

// GET all players
router.get('/', getPlayers);

// GET a single player
router.get('/:id', getPlayer);

// POST a new player
router.post('/', createPlayer);

// PUT (update) an existing player
router.put('/:id', updatePlayer);

// DELETE an existing player
router.delete('/:id', deletePlayer);

module.exports = router;
