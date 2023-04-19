import React from 'react'
import Navbar from './Navbar';
import './Reading.css';

function Reading() {
    return (
        <>
        <h1>Reading</h1>
        <div className="article-section">
            <h2>Article</h2>
            <Navbar></Navbar>
        </div>
        <div className='line'>
            
        </div>
        {/* <div className="news-section">
            <h2>News</h2>
            this is the right side of the page
        </div> */}
        </>
    )
}

export default Reading;