import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// Function to fetch all workouts
export const fetchWorkouts = async () => {
    try {
        const response = await axios.get(`${API_URL}/workouts`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching workouts: ' + error.message);
    }
};

// Function to create a new workout
export const createWorkout = async (workoutData) => {
    try {
        const response = await axios.post(`${API_URL}/workouts`, workoutData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating workout: ' + error.message);
    }
};

// Function to update a workout
export const updateWorkout = async (id, workoutData) => {
    try {
        const response = await axios.put(`${API_URL}/workouts/${id}`, workoutData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating workout: ' + error.message);
    }
};

// Function to delete a workout
export const deleteWorkout = async (id) => {
    try {
        await axios.delete(`${API_URL}/workouts/${id}`);
    } catch (error) {
        throw new Error('Error deleting workout: ' + error.message);
    }
};