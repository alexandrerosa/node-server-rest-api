const express = require('express');
const router = express.Router();

// GET: Retrieve all cars
router.get('/', (req, res) => {
  // Logic to fetch cars
  res.json([{ id: 1, make: 'Toyota' }, { id: 2, make: 'Ford' }]);
});

// POST: Add a new car
router.post('/', (req, res) => {
  // Logic to add a car
  res.status(201).send('Car added');
});

// PATCH: Update a car
router.patch('/:id', (req, res) => {
  // Logic to update a car
  res.send('Car updated');
});

// DELETE: Delete a car
router.delete('/:id', (req, res) => {
  // Logic to delete a car
  res.send('Car deleted');
});

module.exports = router;
