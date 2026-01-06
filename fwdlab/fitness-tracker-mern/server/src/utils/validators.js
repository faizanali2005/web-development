const validateWorkoutInput = (data) => {
    let errors = {};

    if (!data.exerciseName || data.exerciseName.trim() === '') {
        errors.exerciseName = 'Exercise name is required';
    }

    if (!data.duration || isNaN(data.duration) || data.duration <= 0) {
        errors.duration = 'Duration must be a positive number';
    }

    if (!data.caloriesBurned || isNaN(data.caloriesBurned) || data.caloriesBurned < 0) {
        errors.caloriesBurned = 'Calories burned must be a non-negative number';
    }

    if (!data.date) {
        errors.date = 'Date is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

const validateUserInput = (data) => {
    let errors = {};

    if (!data.username || data.username.trim() === '') {
        errors.username = 'Username is required';
    }

    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Valid email is required';
    }

    if (!data.password || data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

module.exports = {
    validateWorkoutInput,
    validateUserInput
};