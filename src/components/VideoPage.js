import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleVideo from './SingleVideo';
import Navbar from './Navbar';

const VideoPage = () => {
    const [data, setDataForMap] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 6;

    // Calculate index range for the current page
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = data.slice(indexOfFirstVideo, indexOfLastVideo);

    const totalPages = Math.ceil(data.length / videosPerPage);

    useEffect(() => {
        const apiKey = 'AIzaSyA2stO7AGq8WR5x8hGR_CVSPiOGY3_nbJw';
        const playlistId = 'PLkuRUtNM02Y51Au6ZAhXCcijC_uXrK9rZ';

        // Fetch data from the YouTube API
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=snippet&key=${apiKey}&maxResults=50`)
            .then(response => {
                // Update state with the fetched data
                setDataForMap(response.data.items);
            })
            .catch(error => {
                // Handle API request error
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className='main-app container-fluid d-flex flex-column justify-content-center align-items-center video-background'>
            {/* Navbar */}
            <Navbar />

            {/* Videos Container */}
            <div className="container row d-flex justify-content-center">
                {/* Videos Mapping */}
                {currentVideos.length === 0 ? (
                    // Show loading message when data is being fetched
                    "Loading..."
                ) : (
                    currentVideos.map((element) => (
                        <SingleVideo
                            channel={element.snippet.videoOwnerChannelTitle}
                            title={element.snippet.title}
                            link={element.snippet.resourceId.videoId}
                            thumbnail={element.snippet.thumbnails.high.url}
                            key={element.snippet.resourceId.videoId}
                        />
                    ))
                )}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {currentPage === 1 ? <></> :
                    <>
                        <button onClick={() => setCurrentPage(currentPage - 1)} class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Previous</span>
                        </button>
                    </>}
                {currentPage}
                {currentPage === totalPages ? <></> : 
                <>
                    <button onClick={() => setCurrentPage(currentPage + 1)} class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Next</span>
                    </button>
                </>}
            </div>
        </div>
    );
};

export default VideoPage;
