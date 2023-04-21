import React, { Component } from 'react';

export class NewsItems extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
            <div>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{left:'50%'}}>-By {source}</span>
                    <img src={imageUrl?imageUrl:"https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            {/* <h5 className="card-title">{title.slice(0,70)+"..."}</h5>
                            <p className="card-text">{description.slice(0,50)+"..."}</p> */}
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">By {author?author:"Unknown"} on {date}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-primary">Read More...</a>
                        </div>
                </div>
            </div>
        )
    }
}
export default NewsItems;    