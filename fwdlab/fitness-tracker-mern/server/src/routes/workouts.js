const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const authMiddleware = require('../middleware/authMiddleware');

// GET all workouts
router.get('/', authMiddleware, workoutController.getAllWorkouts);

// GET a single workout by ID
router.get('/:id', authMiddleware, workoutController.getWorkoutById);

// POST a new workout
router.post('/', authMiddleware, workoutController.createWorkout);

// PUT update a workout by ID
router.put('/:id', authMiddleware, workoutController.updateWorkout);

// DELETE a workout by ID
router.delete('/:id', authMiddleware, workoutController.deleteWorkout);

module.exports = router;