import React from 'react';
// import Listen from './Images/Listen.png';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <>
        <section>
            <div className="container">
                <div className="left1"></div>
                <div className="right">
                    <div className="content">
                        <h1>Listen Here</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Velit sit, doloribus perspiciatis officia repudiandae quae 
                            magnam a suscipit ipsa quas alias ab consequatur possimus exercitationem, 
                            et saepe quod nulla earum?
                        </p>
                        <Link to='' className='btn'>
                            <button className='btn'>Listen Here</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="left2"></div>
                <div className="right">
                    <div className="content">
                        <h1>Speaking Here</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Velit sit, doloribus perspiciatis officia repudiandae quae 
                            magnam a suscipit ipsa quas alias ab consequatur possimus exercitationem, 
                            et saepe quod nulla earum?
                        </p>
                        <button className='btn'>Speak Here</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="left3"></div>
                <div className="right">
                    <div className="content">
                        <h1>Reading Here</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Velit sit, doloribus perspiciatis officia repudiandae quae 
                            magnam a suscipit ipsa quas alias ab consequatur possimus exercitationem, 
                            et saepe quod nulla earum?
                        </p>
                        <Link to='/Reading' className='btn'>
                            <button className='btn'>Read Here</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="left4"></div>
                <div className="right">
                    <div className="content">
                        <h1>Writing Here</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Velit sit, doloribus perspiciatis officia repudiandae quae 
                            magnam a suscipit ipsa quas alias ab consequatur possimus exercitationem, 
                            et saepe quod nulla earum?
                        </p>
                        <button className='btn'>Write Here</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home