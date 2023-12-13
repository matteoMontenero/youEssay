import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SingleVideo from './SingleVideo';

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
        const fetchData = async () => {
            try {
                const apiKey = 'AIzaSyA2stO7AGq8WR5x8hGR_CVSPiOGY3_nbJw';
                const playlistId = 'PLkuRUtNM02Y51Au6ZAhXCcijC_uXrK9rZ';

                // Fetch data from the YouTube API
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=snippet&key=${apiKey}&maxResults=50`);

                // Shuffle the data array to get a random order
                const shuffledVideos = shuffleArray(response.data.items);
                setDataForMap(shuffledVideos);

            } catch (error) {
                // Handle API request error
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <div className='main-app container-fluid d-flex flex-column justify-content-center align-items-center video-background'>
            {/* Navbar */}
            <Navbar />
            <div className="pagination d-flex justify-content-center align-items-center">

                {/* Pagination */}

                {currentPage === 1 ? <></> :
                    <>
                        <button onClick={() => setCurrentPage(currentPage - 1)} className="pagination-button">
                            Previous
                        </button>
                    </>}
                {currentPage}

                {/* Videos Container */}
                <div className="container row d-flex justify-content-center">
                    {/* Videos Mapping */}
                    {currentVideos.length === 0 ? (
                        // Show loading message when data is being fetched
                     <h1 className='fs-1 text-light'>Loading...</h1>
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


                {currentPage === totalPages ? <></> :
                    <>
                        <button onClick={() => setCurrentPage(currentPage + 1)} className="pagination-button">
                            Next
                        </button>
                    </>}
            </div>
        </div>
    );
};

export default VideoPage;
