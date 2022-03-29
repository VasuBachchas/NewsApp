import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,publishedAt}=this.props;
        return (
            <div className="card" >
                <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-dark btn-sm" target='_blank'>Read More</a>
                    </div>
            </div>
        )
    }
}

export default Newsitem
