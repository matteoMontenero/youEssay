import React from "react";

const SingleVideo = (props) => {

    return (
        
        <div className="card text-center col-lg-3 col-md-5 col-sm-12 m-3 p-3 fade-in">
            <img className="card-img-top" src={props.thumbnail} alt="Thumbnail" />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{props.title}</h5>
            </div>
            <a href={`https://www.youtube.com/watch?v=${props.link}&index=1`} target="_blank" rel="noreferrer" className="btn btn-watch">Watch it</a>
            <div className="card-footer">
               by "{props.channel}"
            </div>
        </div>
    )
}

export default SingleVideo;