const express = require("express");
const Car = require("../models/Car");
const router = express.Router();

// GET: Retrieve all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST: Add a new car
router.post("/", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).send("Car added");
  } catch (error) {
    res.status(500).send(error);
  }
});

// PATCH: Update a car
router.patch("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!car) {
      return res.status(404).send("Car not found");
    }
    res.send("Car updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE: Delete a car
router.delete("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).send("Car not found");
    }
    res.send("Car deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
