import React, { Component } from 'react';
// import '../../lib/bootstrap.css';,Redirect
import logo from '../../images/logo.jpg'
import './nav.css';
import {NavLink ,Prompt,withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import  * as actions from './../../actions/index'


class Nav extends Component {

constructor(props) {
    super(props);
    this.state={
        isBlocking:false,
        isRedirect:false
    }
}


RenderNav=()=>{
    const nav= this.props.nav.map((item,key)=><li  key={key}><NavLink 
    style={{ fontWeight: 'bold'}}
    
    activeStyle={{
        borderBottom: '2px solid black',
                    color: 'black',
                    textDecoration: 'none'
                 }} to={item.url}>{item.title}</NavLink></li>)
    return nav;
}


// Click=()=>{
//     alert(this.txtseach.value);
// }
    
_handleKeyPress = (event) => {
   
        event.preventDefault();
        event.target.reset();
        this.setState({
          isBlocking: false,
        });
      
    this.props.setPaginationNext();
  }
    render() {
        
        
        return (
            <div>
                <Prompt when={this.state.isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`}/>
            <div className='fixed' >
               
                <ul>
                    <li><img src={logo} alt="lo go cua thoi tiet " style={{width:'75px'}} /></li>

                    {this.RenderNav()}
                 
                    <li style={{ 'float':'right', 
                                marginRight: '100px',
                                fontWeight: 'bold',
                                color: 'black',
                                textDecoration: 'none'}}><NavLink 
                      activeStyle=  {{
                                        color: 'black',
                                        textDecoration: 'none'
                                    }}  to="/home">Trợ giúp</NavLink></li>
                                    {/* <li><button onClick={()=>this.Click()}>Test</button></li> */}
                   <li style={{float:'right'}}><form onSubmit={(event)=>this._handleKeyPress(event)}><input type="text" placeholder="Search.."  style=   {{
                                                                height:'40px',
                                                                width:'350px',
                                                                marginTop:'3.6%', 
                                                                padding: '14px 16px',
                                                                marginRight: '50px',
                                                                borderRadius:'5px',
                                                                zIndex:'1',
                                                                }} 
                                                                ref={(search)=>{this.txtseach=search}}
                                                                onChange={(event)=>{
                                                                    this.props.filterItemCity(event.target.value)
                                                                    // this.setState({isBlocking:event.target.value.length > 0})
                                                                    return this.props.changed(event)}}
                                                                
                                                                // onKeyPress={(event)=>this._handleKeyPress(event)}
                                                                /></form></li>

               </ul>
          
   
               <div style={{ backgroundColor:'white',  borderBottom:'3px solid red',clear:'both',marginTop:'-10px',height:'25px',  width:'100%'}} ></div>
  </div>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return {
       pagination:state.pagination
    }
    }
    
    const mapDispathToProps= (dispath,props)=>{
        return {
           
            setPaginationNext:()=>{
                dispath(actions.setPaginationNext());
            },
            filterItemCity:(value)=>{
                dispath(actions.filterItemCity(value))
            }
        }
    }
    
    export default withRouter(connect(mapStateToProps,mapDispathToProps)(Nav));
    