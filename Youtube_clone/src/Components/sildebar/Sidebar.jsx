import React from 'react';
import './sidebar.css';
import auto from '../../assets/auto.png';
import blogs from '../../assets/blogs.jpg';
import ent from '../../assets/ent.png';
import game from '../../assets/game.jpg';
import home from '../../assets/home.jpg';
import music from '../../assets/music.jpg';
import news from '../../assets/news.jpg';
import sports from '../../assets/sports.jpg';
import tech from '../../assets/tech.jpg';
import cameron from '../../assets/camreon.jpg';
import jack from '../../assets/jack.jpg';
import megan from '../../assets/megan.jpg';
import simon from '../../assets/simon.jpg';

export default function Sidebar({ sidebar, category, setCategory }) {
    return (
        <>
            <div className={`sidebar ${sidebar ? " " : "small-sidebar"}`}>

                <div className='sortcut-links'>

                    <div className={`side-link ${category === 0 ? "active" : ""} `} onClick={() => setCategory(0)}>
                        <img src={home} alt='home icon'></img><p>Home</p>
                    </div>

                    <div className={`side-link ${category === 20 ? "active" : ""} `} onClick={() => setCategory(20)}>
                        <img src={game} ></img><p>Gaming</p>
                    </div>

                    <div className={`side-link ${category === 2 ? "active" : ""} `} onClick={() => setCategory(2)} >
                        <img src={auto}></img><p>Automation</p>
                    </div>

                    <div className={`side-link ${category === 17 ? "active" : ""} `} onClick={() => setCategory(17)}>
                        <img src={sports} ></img><p>Sports</p>
                    </div>

                    <div className={`side-link ${category === 24 ? "active" : ""} `} onClick={() => setCategory(24)}>
                        <img src={ent} ></img><p>Entertainment</p>
                    </div>

                    <div className={`side-link ${category === 28 ? "active" : ""} `} onClick={() => setCategory(28)}>
                        <img src={tech} ></img><p>Technology</p>
                    </div>

                    <div className={`side-link ${category === 10 ? "active" : ""} `} onClick={() => setCategory(10)}>
                        <img src={music} ></img><p>Music</p>
                    </div>

                    <div className={`side-link ${category === 22 ? "active" : ""} `} onClick={() => setCategory(22)}>
                        <img src={blogs} ></img><p>Blogs</p>
                    </div>

                    <div className={`side-link ${category === 25 ? "active" : ""} `} onClick={() => setCategory(25)}>
                        <img src={news} ></img><p>News</p>
                    </div>
                    <hr></hr>

                </div>

                <div className='subscribed-list'>
                    <h3>SUBSCRIBED</h3>

                    <div className='side-link'>
                        <img src={jack} /><p>PewDiePie</p>
                    </div>

                    <div className='side-link'>
                        <img src={simon} /><p>MrBeast</p>
                    </div>

                    <div className='side-link'>
                        <img src={jack} /><p>Justin Bieber</p>
                    </div>

                    <div className='side-link'>
                        <img src={megan} /><p>5-min craft</p>
                    </div>

                    <div className='side-link '>
                        <img src={cameron} /><p>Nas Daily</p>
                    </div>

                </div>



            </div>

        </>
    );
}
