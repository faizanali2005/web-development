const Workout = require('../models/Workout');

// Get all workouts
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new workout
exports.createWorkout = async (req, res) => {
    const { exercise, duration, calories, date } = req.body;

    try {
        const newWorkout = new Workout({
            exercise,
            duration,
            calories,
            date,
            user: req.user.id
        });

        const workout = await newWorkout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
};

// Update a workout
exports.updateWorkout = async (req, res) => {
    const { exercise, duration, calories, date } = req.body;

    try {
        const workout = await Workout.findByIdAndUpdate(
            req.params.id,
            { exercise, duration, calories, date },
            { new: true }
        );

        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
};

// Delete a workout
exports.deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);

        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};