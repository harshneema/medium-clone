import React from 'react';
import './Trending.css'
import samp from '../store/samp.png'

const Trending = () => {
    return (
        <div>
            <div className='trends'>
                <div className='trends-head'>
                    <span>
                         TRENDING ON MEDIUM
                    </span>
                </div>
                <div className='trends-content'>
                    <div className='trend-1'>
                        <span className='trend-num'> 01 </span>
                        <div className='trend-article'>
                            <div style={{"display": "flex" , "alignItems":"center"}}> 
                                <img src={samp} alt='samp' className='samp'/>
                                <h5 style={{"margin":0}}> Barack Obama </h5>
                            </div>
                            <div> 
                               <a href='/lo' className='links' style={{"fontSize": "20px"}} >My Statement on Ukraine</a>
                            </div>
                             <div>
                                 <span>Feb 25 · 2 min read</span>
                             </div>
                        </div>
                    </div>
                    <div className='trend-1'>
                        <span className='trend-num'> 02 </span>
                        <div className='trend-article'>
                            <div style={{"display": "flex" , "alignItems":"center"}}> 
                                <img src={samp} alt='samp' className='samp'/>
                                <h5 style={{"margin":0}}> Barack Obama </h5>
                            </div>
                            <div> 
                               <a href='/lo' className='links' style={{"fontSize": "20px"}}  >Russia Will Never Win</a>
                            </div>
                             <div>
                                 <span>Feb 25 · 2 min read</span>
                             </div>
                        </div>
                    </div>
                    <div className='trend-1'>
                        <span className='trend-num'> 03 </span>
                        <div className='trend-article'>
                            <div style={{"display": "flex" , "alignItems":"center"}}> 
                                <img src={samp} alt='samp' className='samp'/>
                                <h5 style={{"margin":0}}> Barack Obama </h5>
                            </div>
                            <div> 
                               <a href='/lo' className='links' style={{"fontSize": "20px"}} >Why I will never buy another Samsung device</a>
                            </div>
                             <div>
                                 <span>Feb 25 · 2 min read</span>
                             </div>
                        </div>
                    </div>
                    <div className='trend-1'>
                        <span className='trend-num'> 04 </span>
                        <div className='trend-article'>
                            <div style={{"display": "flex" , "alignItems":"center"}}> 
                                <img src={samp} alt='samp' className='samp'/>
                                <h5 style={{"margin":0}}> Barack Obama </h5>
                            </div>
                            <div> 
                               <a href='/lo' className='links' style={{"fontSize": "20px"}}  >Retrospective: Recent Coinbase Bug Bounty Award</a>
                            </div>
                             <div>
                                 <span>Feb 25 · 2 min read</span>
                             </div>
                        </div>
                    </div>
                    <div className='trend-1'>
                        <span className='trend-num'> 05 </span>
                        <div className='trend-article'>
                            <div style={{"display": "flex" , "alignItems":"center"}}> 
                                <img src={samp} alt='samp' className='samp'/>
                                <h5 style={{"margin":0}}> Barack Obama </h5>
                            </div>
                            <div> 
                               <a href='/lo' className='links' style={{"fontSize": "20px"}} >My Statement on Ukraine</a>
                            </div>
                             <div>
                                 <span>Feb 25 · 2 min read</span>
                             </div>
                        </div>
                    </div>
                    <div className='trend-1'>
                        <span className='trend-num'> 06 </span>
                        <div className='trend-article'>
                            <div style={{"display": "flex" , "alignItems":"center"}}> 
                                <img src={samp} alt='samp' className='samp'/>
                                <h5 style={{"margin":0}}> Barack Obama </h5>
                            </div>
                            <div> 
                               <a href='/lo' className='links' style={{"fontSize": "20px"}} >Why a New Era of War is Dawning — And What Putin Really Wants</a>
                            </div>
                             <div>
                                 <span>Feb 25 · 2 min read</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;