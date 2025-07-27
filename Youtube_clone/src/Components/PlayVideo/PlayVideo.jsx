import React, { useState, useEffect } from 'react';
import './playvideo.css';

import bheem from '../../assets/bheem.mp4';
import like from '../../assets/like.jpg';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.jpg';
import profile from '../../assets/profile.png';
import { Api_key, value_converter } from '../../Data';
import moment from 'moment';

export default function PlayVideo({ videoId }) {

  const [apiData, setApiData] = useState(null);
  const [channelData, setchannelData] = useState(null);
  const [commentData, setcommentData] = useState(null);

  const fetchVideoData = async () => {
    const api_url = (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Api_key}`);
    const response = await fetch(api_url);
    const info = await response.json();
    setApiData(info.items[0]);


  }

  const fetchChannelData = async () => {
    const ch_url = (`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${Api_key}`);
    const response = await fetch(ch_url);
    const info = await response.json();
    console.log(info);
    setchannelData(info.items[0]);

    const comments_url = (`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${Api_key}`);
    const comments_response = await fetch(comments_url);
    const comments_info = await comments_response.json();
    setcommentData(comments_info.items);
    console.log(comments_info);


  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  return (
    <div className='play-video'>

      <iframe src={`https://www.youtube.com/embed/${videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>

      <div className='play-video-info'>
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : " "} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : " "}</p>
        <div>
          <span><img src={like}></img>{apiData ? value_converter(apiData.statistics.likeCount) : " "}</span>
          <span><img className="icon" src={dislike}></img>50</span>
          <span><img className="icon" src={share}></img>Share</span>
          <span><img className="icon" src={save}></img>Save</span>
        </div>
      </div>

      <hr></hr>

      <div className='publisher'>
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt='publisher'></img>
        <div>
          <h3>{apiData ? apiData.snippet.channelTitle : "channelTitle here"}</h3>
          <span>{channelData ? value_converter(channelData.statistics.SubscriberCounts) : "1M"}</span>
        </div>
        <button>Subscribe</button>
      </div>


      <div className='description'>
        <p>
          {apiData ? apiData.snippet.description : "Description here"}
        </p>
        <hr></hr>
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : " "} Comments</h4>
      </div>


      {
        commentData && commentData.map((item, index) => {
          return (
            <div className='comment'>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}></img>
              <div><h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}.</p>
                <div className='comment-action'>
                  <img className="like" src={like} alt='Like'></img>

                  <img className="dislike" src={dislike} alt='Dislike'></img>
                </div>
              </div>
            </div>
          );
        })
      }



    </div>
  );
}


