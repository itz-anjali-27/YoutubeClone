import React, { useState, useEffect } from 'react';
import './Recommended.css';
import { Api_key, value_converter } from '../../Data';
import { Link } from 'react-router-dom';

export default function Recommended({ categoryId }) {

    const [apiData, setapiData] = useState([]);

    const fetchData = async () => {
        const api_url = (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=37&regionCode=US&videoCategoryId=${categoryId}&key=${Api_key}`);
        const response = await fetch(api_url);
        const info = await response.json();
        console.log("info", info);
        setapiData(info.items);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='recommended'>
            {
                apiData.map((item, index) => {
                    return (

                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                            <img src={item.snippet.thumbnails.medium.url}></img>
                            <div className='vid-info'>
                                <h4>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{value_converter(item.statistics.viewCount)} Views</p>
                            </div>
                        </Link>

                    );
                })

            }

        </div>
    );
}
