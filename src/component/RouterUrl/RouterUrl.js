import React, { Component } from 'react';

import { Route,Switch } from "react-router-dom";
import Home from '../home/home';
import ItemWeather from '../item-weather/item-weather';
import New from '../new/new';

class RouterUrl extends Component {
    render() {
        return (
          
                 <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home/:name/:country.html" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/item-weather" component={ItemWeather} />
                        <Route path="/new" component={New} />
                        <Route component={Home} />
                    </Switch>
                </div>
         
        );
    }
}

export default RouterUrl;