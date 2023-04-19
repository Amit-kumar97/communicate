import React, { useState, useEffect } from 'react';
import Newsitem from './NewsItems';
import PropTypes from 'prop-types';

const News = ({ country, pageSize, category, topic }) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
    const fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=24c8890a15f340968cfdb2d55ff9817b&page=1&pageSize=${pageSize}`;
        const data = await fetch(url);
        const parseData = await data.json();
        setArticles(parseData.articles);
        setTotalPages(Math.ceil(parseData.totalResults / pageSize));
        };
        fetchData();
    }, [country, pageSize, category]);

    const handlePrevClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=24c8890a15f340968cfdb2d55ff9817b&page=${page - 1}&pageSize=${pageSize}`;
        const data = await fetch(url);
        const parseData = await data.json();
        setArticles(parseData.articles);
        setPage(page - 1);
    };

    const handleNextClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=24c8890a15f340968cfdb2d55ff9817b&page=${page + 1}&pageSize=${pageSize}`;
        const data = await fetch(url);
        const parseData = await data.json();
        setArticles(parseData.articles);
        setPage(page + 1);
    };

    return (
        <div className='container my-3'>
            <div>
                <h2 className='text-center' style={{marginTop:"60px",color:"blue"}}>{this.props.topic} - Top HeadLines</h2>
            </div>
        {/* Render news items */}
        <div className="row">
            {articles.map((element) => (
                <div className="col-md-4 my-3" key = {element.url}>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
            ))}
        </div>
        
        {/* Render pagination */}
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
            <button disabled={this.state.page>=this.state.tpage} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
        <div className="text-center">page no: {this.state.page}/{this.state.tpage}</div>
        </div>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
    topic: 'General'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    topic: PropTypes.string
};
export default News;
