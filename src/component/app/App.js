import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Nav from '../nav/nav';
import RouterUrl from '../RouterUrl/RouterUrl';
class App extends Component {

constructor(props) {
  super(props);
  this.state={
    nav:[
     { title:"Trang  chủ",url:'/home'},
     { title:"Thanh phố",url:'/item-weather'},
     { title:"Tin tức",url:'/new'}
    ],
    name:'vu khac hoi'
  }
}


change=(event)=>{
  this.setState({
    name:event.target.value
  })
}

  render() {

  
    return (
      <div className="App">
        <header  >
              
              <link rel="stylesheet" 
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
              <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
                    integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
        </header>



        <Router>
            <div>
              
               <Nav nav={this.state.nav} name={this.state.name} changed={this.change}></Nav>
               <br/>
              <br/>
              <br/>
               <RouterUrl className="router"  value= {this.state.name}/>
               {/* <h1>{this.state.name}</h1> */}
               
            </div>
        </Router>
        


      </div>
    );
  }
}

export default App;
