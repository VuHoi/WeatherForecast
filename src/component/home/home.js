import React, { Component } from 'react';
import hinh1 from '../../images/hinh1.jpg';
import hinh2 from '../../images/hinh2.jpg';
import hinh3 from '../../images/hinh3.jpg';
import {connect} from 'react-redux';
import DetailWeather from './../DetailWeather/DetailWeather';
import Footer from './../footer/footer';
import './home.css';
class Home extends Component {
  constructor(props) {
      super(props);
      this.state={
        itemCity:{}
      }
  }
  
    componentWillMount() {
    
        let name=this.props.match.params.name?this.props.match.params.name:'Ho Chi Minh';
let country=this.props.match.params.country?this.props.match.params.country:'vn';
        let url='http://api.worldweatheronline.com/premium/v1/weather.ashx?key=046159418f13497585894125180404&q='+name+','+country+'&num_of_days=2&tp=3&format=json';
      console.log(url)
      
        fetch(url)
         .then(response => response.json())
         .then(data => {this.setState({
             itemCity:data
         });
       
     }
     );
       
    }

    render() {
      
        return (
            <div >
              
            
             <div id="demo" className="carousel slide"data-ride="carousel">
                   
                    <div >
                            <div className="carousel-item active">
                                <img src={hinh1} alt="Los Angeles" width={'100%'} height={540} />
                                <div className="carousel-caption">
                                <h1 style={{marginTop:'-200px', fontWeight:'bold'}}>Thời tiết hôm nay thế nào ?</h1>
                                <h3>Tốt đẹp chứ !</h3>
                                </div>   
                            </div>
                            <div className="carousel-item">
                                <img src={hinh2} alt="Chicago" width={'100%'} height={540} />
                                <div className="carousel-caption">  
                                <h2 style={{marginTop:'-100px', fontWeight:'bold'}}>Bạn muốn đi chơi hay một chuyến dã <br/>ngoại cùng gia đình ?</h2>
                               
                                </div>   
                            </div>
                            <div className="carousel-item">
                                <img src={hinh3} alt="New York" width={'100%'} height={540} />
                              
                            </div>

                    </div>
                          <a className="carousel-control-prev" href="#demo" data-slide="prev">
                             <span className="carousel-control-prev-icon"></span>
                          </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                </div>
          
          
          
              <div  >

                  <DetailWeather name={this.props.match.params.name?this.props.match.params.name:'Ho Chi Minh'} country={this.props.match.params.country?this.props.match.params.country:'vn'} weather={this.state.itemCity}/>
                
                  <Footer/>
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
           
           
          
    
        }
    }

    export default connect(mapStateToProps,mapDispathToProps)(Home);
