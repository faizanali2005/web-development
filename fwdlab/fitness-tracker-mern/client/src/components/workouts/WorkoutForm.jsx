import React, { useState } from 'react';

const WorkoutForm = ({ onSubmit }) => {
    const [exerciseName, setExerciseName] = useState('');
    const [duration, setDuration] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const workoutData = {
            exerciseName,
            duration,
            caloriesBurned,
            date,
        };
        onSubmit(workoutData);
        setExerciseName('');
        setDuration('');
        setCaloriesBurned('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="workout-form">
            <div>
                <label>Exercise Name:</label>
                <input
                    type="text"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Duration (minutes):</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Calories Burned:</label>
                <input
                    type="number"
                    value={caloriesBurned}
                    onChange={(e) => setCaloriesBurned(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Workout</button>
        </form>
    );
};

export default WorkoutForm;