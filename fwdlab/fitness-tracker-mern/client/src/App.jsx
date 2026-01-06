import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import WorkoutList from './components/workouts/WorkoutList';
import WorkoutForm from './components/workouts/WorkoutForm';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/workouts" component={WorkoutList} />
          <Route path="/add-workout" component={WorkoutForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;