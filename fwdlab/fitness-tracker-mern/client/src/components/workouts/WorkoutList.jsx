import React, { useEffect, useState } from 'react';
import { getWorkouts } from '../../api/api';
import WorkoutItem from './WorkoutItem';
import Spinner from '../common/Spinner';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const data = await getWorkouts();
                setWorkouts(data);
            } catch (error) {
                console.error('Error fetching workouts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkouts();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="workout-list">
            <h2>Your Workouts</h2>
            {workouts.length === 0 ? (
                <p>No workouts found. Start adding some!</p>
            ) : (
                workouts.map(workout => (
                    <WorkoutItem key={workout._id} workout={workout} />
                ))
            )}
        </div>
    );
};

export default WorkoutList;