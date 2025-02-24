import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFound} />
            </Routes>
        </Router>
    );
};

export default App;
