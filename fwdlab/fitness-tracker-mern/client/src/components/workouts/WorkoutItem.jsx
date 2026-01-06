import React from 'react';

const WorkoutItem = ({ workout, onDelete, onEdit }) => {
    return (
        <div className="workout-item">
            <h3>{workout.exerciseName}</h3>
            <p>Duration: {workout.duration} minutes</p>
            <p>Calories Burned: {workout.caloriesBurned}</p>
            <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
            <button onClick={() => onEdit(workout.id)}>Edit</button>
            <button onClick={() => onDelete(workout.id)}>Delete</button>
        </div>
    );
};

export default WorkoutItem;