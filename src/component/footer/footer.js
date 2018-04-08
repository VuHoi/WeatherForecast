import React, { Component } from 'react';
import './footer.css';
import {connect} from 'react-redux';
import {Label} from 'react-bootstrap'
class Footer extends Component {


    tab=()=>{
        const tabRelated=this.props.pagination.currentItems.map((item,index)=>{
         return    index<50 ?   <Label bsStyle="success" className="float-left ml-1" key={index}>{item.name}</Label>:null
        
        });
        return tabRelated ;
    }
    
    render() {
        return (
            <div className="backgroundFooter">
                <div className="row a">
                <div className="col-4  margin">
                <p className="float-left ml-4 item ">Được phát triển bởi Vũ Khắc Hợi</p>
                {/* <br/> */}
                <p className="float-left ml-4 item ">Trường đại học công nghệ thông tin TP.HCM</p>
                <p className="float-left ml-4 item ">Số điện thoại : 01665240627</p>
                <p className="float-left ml-4 item ">Địa chỉ:Tân lập Dĩ An Bình Dương</p>
                </div>
                <div className="col-4 mt-3">
                <h3>Thẻ liên quan</h3>
                    {this.tab()}
                </div>
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
export default connect(mapStateToProps,null)(Footer);