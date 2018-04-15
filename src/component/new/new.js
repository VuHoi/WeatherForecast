import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from "react-router-dom";
// import * as actions from './../../actions/index'
import Footer from './../footer/footer';
import $ from 'jquery';
// import { fulse } from 'react-animations'
// const styles = StyleSheet.create({
//     bounce: {
//         animationName: fulse,
//         animationDuration: '1s'
//     }
// })
class New extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // isRedirect: false,
            content: [],

        }
    }

    componentWillMount() {
        // var request = require('request');
        // var cheerio = require('cheerio');
        // // var URL = require('url-parse');
        // var pageToVisit = "https://www.newsbtc.com/2018/04/14/experts-expect-bitcoin-price-hit-250000-2022-heres/";


        // request(pageToVisit, (error, response, body) => {
        //     if (error) {
        //         console.log("Error: " + error);
        //     }

        //     console.log("Status code: " + response.statusCode);
        //     if (response.statusCode === 200) {

        //         // Parse the document body
        //         var $ = cheerio.load(body);
        //         var items = [];
        //         var images = []
        //         $('html > body').find('section>div>p').each((_, ele) => {
        //             items.push($(ele).text())
        //         });
        //         $('html > body').find('figure>img').each((_, ele) => {
        //             images.push($(ele).attr('src'))
        //         });
        //         console.log(images)
        //         this.setState({
        //             content: items,
        //             image: images
        //         })
        //     }
        // });

        let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e2866089fdb4052bb91b0b9e845d344';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    content: data
                })
            }
            );

    }

    renderContent = () => {
        const items = this.state.content.articles ? this.state.content.articles.map((item, key) => {
            return (
                <div key={key} className="card float-left m-1" style={{ height: '400px', width: '32%' }}>
                    <a href={item.url}>
                        <div   >
                            <img id={key} className="w-100" style={{ height: '180px' }} src={item.urlToImage ? item.urlToImage : 'http://www.bookkeeping-essentials.com/images/cra-news.jpg'} alt={key} />

                        </div>
                    </a>
                    <strong> <p className="text-left" style={{ marginLeft: '10px', marginRight: '10px' }}>{item.title}</p></strong>
                    <p className="text-left" style={{ marginLeft: '10px', marginRight: '10px' }}>{item.description}</p>
                </div>
            )
        }) : ""
        return items;

    }




    // renderContent = () => {
    //     const content = this.state.content.map((value, key) => {
    //         return <p key={key} >{value}</p>
    //     })
    //     return content;

    // }
    // renderImage = () => {
    //     const image = this.state.image.map((value, key) => {
    //         return <img key={key} src={value} alt="hinh dai hien" ></img>
    //     })
    //     return image;

    // }

    // redirect = () => {
    //     this.setState({
    //         isRedirect: true

    //     })

    //     this.props.onAddTask(this.state)
    //     this.props.setPaginationNext();
    // }
    render() {


        // if (this.state.isRedirect) {

        //     return <Redirect to={'/home'} />
        // }
        $("button").click(function () {
            $("img").fadeOut(1000);
        });

        return (
            <div>

                <div className="container" style={{ marginTop: '50px' }}>
                    <button>Hide</button>
                    <br />
                    {this.renderContent()}

                    {/* {/* {this.renderImage()} } */}
                    {/* <button onClick={() => { this.redirect() }} */}
                    {/* >test redirect</button>  */}

                </div>
                <Footer />
            </div>
        );
    }
}



// const mapStateToProps = state => {
//     return {

//     }
// }


// const mapDispathToProps = (dispath, props) => {
//     return {
//         onAddTask: task => {
//             dispath(actions.addTask(task));
//         },
//         setPaginationNext: () => {
//             dispath(actions.setPaginationNext());
//         }
//     }
// }
export default New;
// export default connect(mapStateToProps, mapDispathToProps)(New);