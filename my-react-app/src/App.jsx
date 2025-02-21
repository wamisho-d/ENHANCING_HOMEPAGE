import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
