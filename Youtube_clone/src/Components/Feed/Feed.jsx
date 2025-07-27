import React, { useEffect, useState } from 'react';
import './feed.css';
import { Link } from 'react-router-dom';
import { Api_key, value_converter } from '../../Data';
import moment from 'moment';



export default function Feed({ category }) {

    const [data, setData] = useState([]);

    const feedData = async () => {
        const url = (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${Api_key}`);
        const response = await fetch(url);
        const info = await response.json();
        setData(info.items);

    }

    useEffect(() => {
        feedData();
    }, [category]);

    return (

        <div className='feed'>
            {data.map((item, index) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails.medium.url}></img>
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            )
            )}
        </div>
    );
}
