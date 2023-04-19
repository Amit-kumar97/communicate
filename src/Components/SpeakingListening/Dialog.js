import React from 'react'
import dial from './dialogue.json'
import Ditem from './Ditem';
// import song from '../audio/'
const Dialog = (props) => {
    // console.log(dial[1].di)\
    const id = props.id;
    console.log(id)
    const dia = dial[id];
    let first = dia.first;
    let sec = dia.sec;
    let di = dia.di;
    const renderList = di.map((item, index) =>
        index%2==0?<div key={index} className="mx-6" style={{"border":"1px solid blue"}}><span style={{color:"red"}}>{first}</span>:{item}</div>:<div key={index} style={{"border":"1px solid green",background:"cyan"}}>{sec}:{item}</div>
    );
    return (
        <div style={{width: "495px"}}>
            
                {
                    renderList
                }
                {/* <audio src={require("../audio/1A.mp3")}  controls style={{marginLeft:"80px"}}></audio> */}
        </div>
    )
}

export default Dialog
