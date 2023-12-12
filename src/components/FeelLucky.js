import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const FeelLucky = () => {
    const [data, setDataForMap] = useState([]);

    useEffect(() => {
        const apiKey = 'AIzaSyA2stO7AGq8WR5x8hGR_CVSPiOGY3_nbJw';
        const playlistId = 'PLkuRUtNM02Y51Au6ZAhXCcijC_uXrK9rZ';

        // Fetch data from the YouTube API
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=snippet&key=${apiKey}&maxResults=50`)
            .then(response => {
                // Generate Random Number & Update state with the fetched data
                let randomNumber = Math.round(Math.random() * 44);
                setDataForMap(response.data.items[randomNumber]);
            })
            .catch(error => {
                // Handle API request error
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
       
        <div className='background-lucky'>
            {/* Navbar */}
             <Navbar />

            {/* Videos Container */}

            <div className='container container-lucky mt-auto mb-auto'>
                <div className="card text-center m-3 p-3 fade-in">
                    <img
                        className="card-img-top"
                        src={data.snippet && data.snippet.thumbnails && data.snippet.thumbnails.high.url}
                        alt="Thumbnail"
                    />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title">{data.snippet && data.snippet.title}</h5>
                    </div>
                    <a
                        href={`https://www.youtube.com/watch?v=${data.snippet && data.snippet.resourceId && data.snippet.resourceId.videoId}&index=1`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-watch"
                    >
                        Watch it
                    </a>
                    <div className="card-footer">
                        by "{data.snippet && data.snippet.videoOwnerChannelTitle}"
                    </div>
                </div>
            </div>

        </div>
        </>

    );
};

export default FeelLucky;
