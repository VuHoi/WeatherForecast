import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect } from "react-router-dom";
import  * as actions from './../../actions/index'

class New extends Component {
   
   constructor(props) {
       super(props);
       this.state={
        isRedirect:false
       }
   }
   
   redirect=()=>{
       this.setState({
        isRedirect:true
      
       })

       this.props.onAddTask(this.state)
       this.props.setPaginationNext();
   }
    render() {
        if(this.state.isRedirect)
        {
           
           return <Redirect to={'/home'} />
        }
        return (
            <div style={{ marginTop:'50px'}}>
                this is  new 
                <button onClick={()=>{this.redirect()}}
                >test redirect</button>
             
            </div>
        );
    }
}



 const mapStateToProps =state =>{
     return  {

     }
 }


  const mapDispathToProps= (dispath,props)=>{
      return {
          onAddTask :task=>{
              dispath(actions.addTask(task));
          },
          setPaginationNext:()=>{
              dispath(actions.setPaginationNext());
          }
      }
  }
export default connect(mapStateToProps,mapDispathToProps) (New);