import React, { Component } from 'react';
import './DetailWeather.css';
import {Label,ListGroup,ListGroupItem,Panel,Image,Alert} from 'react-bootstrap';
class DetailWeather extends Component {
renderHourToday=(index)=>{
  
  const hours=  this.props.weather.data?this.props.weather.data.weather[index].hourly.map((hour,key)=>{
      
    
      return ( <div key={key} className="card cardItem m-1">
                 <div className="card alert-danger">  <h2 className="font-weight-bold">{key*3}<sub>h</sub> - {key*3+3}<sub>h</sub></h2></div>
                <div className="d-flex justify-content-center color"><img alt="thoi tiet" src={hour.weatherIconUrl[0].value} /></div>
                <div className="d-flex justify-content-center color"><h1>{hour.tempC} <small><sup>oC</sup></small></h1></div>
               </div>   
               );
    }):null

    return hours;
}


    render() {
        let data=this.props.weather.data;
        console.log(data?data:"Không rõ")
        return (
            <div className="background container">
                <div >
                        <div className='w-100 d-flex justify-content-center ml-5 p-3'>
                                <h1 className="title">Thời tiết hôm nay {this.props.weather.data?this.props.weather.data.weather[0].date:""} tại {this.props.name}.</h1>
                        </div>
                        <div className="row">
                        <div className="col-5 " >
                        <Panel>
    <Panel.Heading style={{fontSize:'20px', fontWeight:'bold'}} >Bảng chi tiết thời tiết</Panel.Heading>
    <Panel.Body>
    <ListGroup>
                            <ListGroupItem className="itemList"  style={{width:'100%',marginLeft:'0px'}}>Nhiệt độ cao nhất : {data?data.current_condition[0].FeelsLikeC:"Không rõ"}<sup>oC</sup></ListGroupItem>
                            <ListGroupItem  className="itemList">Mây che phủ : {data?data.current_condition[0].cloudcover+"%":"Không rõ"}</ListGroupItem>
                            <ListGroupItem  className="itemList">Độ ẩm : {data?data.current_condition[0].humidity+"%":"Không rõ"}</ListGroupItem>
                            <ListGroupItem  className="itemList">Khả năng hiển thị : {data?data.current_condition[0].visibility+"%":"Không rõ"}</ListGroupItem>
                            <ListGroupItem  className="itemList">Tốc độ gió: {data?data.current_condition[0].windspeedKmph+"kmph":"Không rõ"}</ListGroupItem>
                            <ListGroupItem  className="itemList">Mô tả: {data?data.current_condition[0].weatherDesc[0].value:"Không rõ"}</ListGroupItem>
                        </ListGroup>
    </Panel.Body>
  </Panel>
                        
                        </div>

                        <div className="col-7" >
                        <div style={{float:'right',width:'200px'}}>
                        <Image className="image" src={data?data.current_condition[0].weatherIconUrl[0].value:"http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"} rounded />
                        <h5><Label bsStyle="info"> Thời gian nắng : {data?data.weather[0].sunHour:"Không rõ"}<sub> giờ  </sub> </Label></h5>

                        </div>
                        <br/>
                        <h1 style={{ WebkitTextStrokeWidth : '2px' }}>Nhiệt độ trung bình : {data?data.current_condition[0].temp_C:"Không rõ"}<sup>oC</sup></h1>
                        <Alert bsStyle="warning" className="col-8 mt-3 text-left">
                         <p> +<strong>{this.props.name}</strong> have {data?data.current_condition[0].weatherDesc[0].value:"Không rõ"}</p>
                        <p> +The sunrise time : {data?data.weather[0].astronomy[0].sunrise:"Không rõ"}</p>
                         <p> +The sunset time : {data?data.weather[0].astronomy[0].sunset:"Không rõ"}</p>
                         <p> +The moonrise time : {data?data.weather[0].astronomy[0].moonrise:"Không rõ"}</p>
                         <p> +The moonset time : {data?data.weather[0].astronomy[0].moonset:"Không rõ"}</p>
                        </Alert>
                        <br/>

                        </div>
                         </div>
                        <div className='w-100 d-flex justify-content-center  p-3  '>
                                
                                {this.renderHourToday(0)}   
                                
                        </div>
                      <h3 style={{fontWeight:'bold'}}>Ngày mai</h3>
                        <div className='w-100 d-flex justify-content-center  p-3  '>
                                
                                {this.renderHourToday(1)}   
                                
                        </div>
 
                </div>
            </div>
        );
    }
}

export default DetailWeather;