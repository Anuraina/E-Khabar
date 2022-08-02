import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        {/* see the syntax below {{}} .Its made an object  , 2line if image url is null gove this default url else give the url given in api*/}
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
              {source}
            </span>
          <img
            src={
              !imgUrl
                ? "https://images.hindustantimes.com/tech/img/2022/05/01/1600x900/pc03_1651373080014_1651373099019.png"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            
            <p className="card-text">{description}... </p>

            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>{" "}
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              {" "}
              {/* btn size becomws samll with btn-sm */}
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
