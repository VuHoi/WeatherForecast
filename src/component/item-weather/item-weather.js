import React, { Component } from 'react';
import './item-weather.css';
import { Pagination } from 'react-bootstrap';
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import  * as actions from './../../actions/index'
import { withRouter } from 'react-router-dom'

class ItemWeather extends Component {
constructor(props) {
    super(props);
    this.state={
      itemCity:{},
        hover:0,
selectedWeather:0
    }
}

enter =(index)=>{
    this.setState({
        hover:index,
        
    })
   
}



selectedItemCity=(key)=>{
  
    this.props.chooseItemCity({key,city:this.state.itemCity})
   this.setState({
      selectedWeather:key
   })
}
listWeather=()=>{
    
 const weathers= this.props.pagination.currentItems.map((item,key)=>{
     var hover ={
            backgroundColor :(this.props.pagination.selectedCity===key || this.state.hover===key ? 'bisque' :'white'), 
            textDecoration: 'none',
            color:'black',
            fontWeight:'bold'
        }
     return(    <div key={key} className="card m-2  float-left item  " style={{width:'31.5%'}}>
         <Link to={"/home/"+item.name+"/"+item.country+".html"}
             onClick={()=>{ this.selectedItemCity(key)}}
              style={hover} 
              onMouseEnter={this.enter.bind(this,key)}>{item.name}-{item.country}
              </Link>
                 </div>);
 });




 return weathers
}   



nextPage=()=>{
  
    this.props.setPaginationNext();
    
    this.setState({
        a:false
    })
}
previousPage=()=>{
    this.props.setPaginationPrevious()
    this.setState({
        a:false
    })
}

fillItem=(number)=>{
   this.props.chooseItemPagination(number)
}



    render() {

     
      
    
        let items = [];
        for (let number = this.props.pagination.min; number <= this.props.pagination.max; number++) {
        items.push(
            <Pagination.Item key={number} active={number === this.props.pagination.currentPage } onClick={this.fillItem.bind(this,number)}>{number}</Pagination.Item>
                  );
           }
        return (
            <div className="background1" style={{ marginTop:'100px'}}>
            <div className="container">
           {this.listWeather()}
           <Pagination style={{position:'relative ',top:'70px',float:'right'}} bsSize="large">
                  <Pagination.Prev onClick={()=>this.previousPage()} />
                  {items}
                  <Pagination.Next   onClick={()=>this.nextPage()} />
           </Pagination>
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
        setPaginationPrevious:()=>{
            dispath(actions.setPaginationPrevious())
        },
        chooseItemPagination:(currentPage)=>{
            dispath(actions.chooseItemPagination(currentPage))
        },
        chooseItemCity:(itemCity)=>{
            dispath(actions.chooseItemCity(itemCity))
        }
      

    }
}

// export default connect(mapStateToProps,mapDispathToProps)(ItemWeather);

export default withRouter(connect(mapStateToProps,mapDispathToProps)(ItemWeather))