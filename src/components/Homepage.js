import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Collage from '../assets/collage.png';

const Homepage = () => {

    return (
        <div className="background">

            <div className="container col-xxl-8 px-4 py-5">

                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 glassed">

                    <div className="col-10 col-sm-8 col-lg-6 mt-0">
                        <img src={Collage} className="d-block mx-lg-auto img-fluid img-radius-per" alt="Bootstrap Themes" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6 mt-0">

                        <h1 className="display-5 fw-bold lh-1 mb-3 text-light"> Diving Deep into <span style={{ color: 'red' }}>Ideas.</span></h1>

                        <p className="lead text-light">A Curated Collection of Thoughtful and Insightful YouTube Essays Covering a Range of Engaging Topics.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/videos" className="text-light text-decoration-none"> <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 btn-watch">Explore the videos </button></Link>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">About the project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;