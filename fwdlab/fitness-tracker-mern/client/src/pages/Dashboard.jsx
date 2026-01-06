import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import WorkoutList from '../components/workouts/WorkoutList';
import WorkoutForm from '../components/workouts/WorkoutForm';
import Spinner from '../components/common/Spinner';
import { fetchWorkouts } from '../api/api';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [workouts, setWorkouts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const getWorkouts = async () => {
            try {
                const data = await fetchWorkouts(user.id);
                setWorkouts(data);
            } catch (error) {
                console.error('Error fetching workouts:', error);
            } finally {
                setLoading(false);
            }
        };

        getWorkouts();
    }, [user.id]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="dashboard">
            <h1>Welcome, {user.name}</h1>
            <WorkoutForm setWorkouts={setWorkouts} />
            <WorkoutList workouts={workouts} />
        </div>
    );
};

export default Dashboard;