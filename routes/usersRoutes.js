const express = require('express');
const router = express.Router();

// GET: Retrieve all users
router.get('/', (req, res) => {
  // Logic to fetch users
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

// POST: Create a new user
router.post('/', (req, res) => {
  // Logic to create a user
  res.status(201).send('User created');
});

// PATCH: Update a user
router.patch('/:id', (req, res) => {
  // Logic to update a user
  res.send('User updated');
});

// DELETE: Delete a user
router.delete('/:id', (req, res) => {
  // Logic to delete a user
  res.send('User deleted');
});

module.exports = router;
