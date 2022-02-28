import React from 'react'
import './Landing.css'

const Landing = () => {
    return (
        <div>
            <div className='titlepage'>
                <div className='bgd'>
                    <div className='content'>
                     <span><h2 className='header-1'>Medium is a place to write, read, and connect</h2></span>
                     <span><p className='para-1'>It's easy and free to post your thinking on any topic and connect with millions of readers.</p></span>
                     <span><a className='links' href="/lo"><button className='write'>Start Writing</button></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;