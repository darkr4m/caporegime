import React, { Component } from 'react';
import Navbar from './layout/Navbar';

class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <h1>CRM live.</h1>
            </div>
        )
    }
}

export default App;