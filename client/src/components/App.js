import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';

class App extends Component {
    render(){
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                </Fragment>
            </Router>
        )
    }
}

export default App;