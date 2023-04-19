import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
    const [active, setActive] = useState(false);

    const handleClick = () =>{
        setActive(!active);
    }
    return (
        <>
        {/* <div className="left">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div> */}
        <header>
            <a href="#" className='brand'>LSRW</a>
            <div className="menu-btn" onClick={handleClick}>{active?'Active':'Inactive'}</div>
            <div className='navigation'>
                <div className="navigation-items">
                    <a href="#">Home</a>
                    <a href="#">Articles</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </header>

        <section className='home'>
            <div className="content">
                <h1>Life<br/><span>Happy</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Totam, officia rem ipsa vel recusandae delectus laborum reprehenderit! 
                    Ipsa laudantium cumque est qui inventore voluptatibus enim repellat 
                    necessitatibus consectetur. Eveniet, quisquam?
                </p>
                <a href="#">Read More</a>
            </div>
            <div className='media-icon'>
                <a href="#"><i className='fab fa-facebook-f'></i></a>
                <a href="#"><i className='fab fa-instagram'></i></a>
                <a href="#"><i className='fab fa-twitter'></i></a>
            </div>
        </section>
        </>
    );
}

export default LandingPage;