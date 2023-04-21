import React, { Component } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

export class News extends Component{
    // Without using API
    
    // articles = [
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Angus Watson, Duarte Mendonca",
    //         "title": "Australia pulls out of Afghanistan cricket series over Taliban's restrictions on women",
    //         "description": "Australia's men's cricket team has withdrawn from a series of upcoming matches against Afghanistan in protest over the ruling Taliban's restrictions on women and girls' education and employment, Cricket Australia (CA) said in a statement Thursday.",
    //         "url": "https://www.cnn.com/2023/01/12/sport/australia-afghanistan-cricket-taliban-intl-hnk-spt/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230112030420-01-australia-cricket-team-010823.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-01-12T08:27:59Z",
    //         "content": "Australias mens cricket team has withdrawn from a series of upcoming matches against Afghanistan in protest over the ruling Talibans restrictions on women and girls education and employment, Cricket … [+2284 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Shadi Khan Saif",
    //         "title": "Ditching cricket series only punishes Afghanistan even more | Shadi Khan Saif",
    //         "description": "Cricket Australia’s decision to cancel series against Afghanistan only serves to further isolate a country already abandoned by the westMy experience playing in the Australian club cricket scene has shown that players have a resilient fighting spirit and will…",
    //         "url": "https://www.theguardian.com/commentisfree/2023/jan/13/australia-ditching-uae-cricket-series-only-punishes-afghanistan-even-more",
    //         "urlToImage": "https://i.guim.co.uk/img/media/14836045ecf198f382c9c1e500d91e48bf9d53ea/0_250_3590_2153/master/3590.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=e77bf0ec709775846a6fcd5bed7b5a44",
    //         "publishedAt": "2023-01-13T14:00:17Z",
    //         "content": "My experience playing in the Australian club cricket scene has shown that players have a resilient fighting spirit and will not surrender without a fight.\r\nBut when I heard Australia was ditching a h… [+3863 chars]"
    //     }
    // ]
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
        topic: 'General'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        topic: PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            articles:[],
            page:1,
            tpage:1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=24c8890a15f340968cfdb2d55ff9817b&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        // console.log(parseData);
        this.setState({
            articles:parseData.articles,
            tpage:Math.ceil(parseData.totalResults/this.props.pageSize)
        })
        // console.log(this.state.tpage)
    }
    handlePrevClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=24c8890a15f340968cfdb2d55ff9817b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        // console.log(parseData);
        this.setState({
            articles:parseData.articles,
            page: this.state.page-1
        })
    }
    handleNextClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=24c8890a15f340968cfdb2d55ff9817b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        // console.log(parseData);
        this.setState({
            articles:parseData.articles,
            page: this.state.page+1
        })
    }
    render(){
        return(
            <div className="container my-3">
                <div>
                <h2 className='text-center' style={{marginTop:"60px",color:"blue"}}>{this.props.topic} - Top HeadLines</h2>
                </div>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key = {element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
                    <button disabled={this.state.page>=this.state.tpage} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
                <div className="text-center">page no: {this.state.page}/{this.state.tpage}</div>
            </div>
        )
    }
}
export default News;