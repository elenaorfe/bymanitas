import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './libs/bulma-0.7.1/css/bulma.css';
import Cookies from './Component/Cookies_Info';
import Footer from './Component/Footer';
import Home from './Container/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cookies" component={Cookies} />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
