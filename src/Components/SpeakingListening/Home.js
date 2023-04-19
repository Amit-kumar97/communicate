import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import sdata from './sub_topic.json'
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'
import Homeitem from './Homeitem'
import Dialog from './Dialog'
const Home = () => {
    // const location = useLocation()
    const data = sdata;
    const [id,setid] = useState(1);
    
    return (
        <div className='d-flex'>
            <div style={{ overflow: "scroll", width: "21rem", height: "100vh", backgroundColor: "red" }}>
                {
                    data.map(
                        (element) => {
                            const id = (element.id)
                            return (
                                <div className=''>
                                    <Homeitem key={element.id} id={element.id} atopic={element.atopic} btopic={element.btopic} setId={setid}/>
                                </div>
                            )
                        }
                    )
                }

            </div>
            <div className='dia' style={{marginLeft:"300px",marginTop:"80px"}}>
                <div className='d-flex' style={{border:"1px solid"}}>
                    <img src="#" alt="" style={{width:"130px",height:"160px"}}/>
                    <div>
                    <div style={{marginTop:"25px",marginLeft:"18px"}}>
                    <h4>{data[id-1].atopic}</h4>
                    
                    <h5>{data[id-1].btopic}</h5>
                    </div>
                    <audio src="#"  controls style={{marginLeft:"15px"}}></audio>
                    </div>
                </div>
                <Dialog id={id}/>
            </div>
        </div>

    )
}

export default Home
