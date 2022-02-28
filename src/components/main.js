import React from 'react';
import './main.css'
import customData from '../store/sample_report.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import samp2 from '../store/ellipsis-solid.svg'
import samp3 from '../store/bookmark-solid.svg'

const main = () => {
    
    console.log(customData.results[1]);
    console.log(customData.results[1].image_url)
    return (
        <div>
           <div className='main'>
              
            <div className='articles'>
                {customData.results.slice(4,20).map((data ) => (
                  <div className='sb'>  
                      <div className='article-desc'>
                        <h4 className='marg'>{data.creator}</h4>
                        <h2 className='marg'>{data.title}</h2>
                        <p className='articledesc'>{` ${data.description} `}</p>
                        <div className='footer'> 
                            <div className='footer-1' >
                            <span> {`14 Feb · 4 Min read ·`} </span>
                            <span><button className='button-cat'>{data.category}</button></span>
                            </div>
                            <div className='footer-2'>
                            <img src={samp3} alt='samp' className='samp'/>
                            <img src={samp2} alt='samp' className='samp'/>
                            
                             </div>
                         </div>
                    </div>
                    <div> 
                        <img src='https://picsum.photos/200' alt='sample'/>
                    </div>
                </div>
                ) )}

            </div>
            <div className='sticky-content'>
                   <h4>DISCOVER MORE OF WHAT MATTERS TO YOU</h4>
                   <div>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Self</p>
                    </div>
                   </a>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Relationships</p>
                    </div>
                   </a>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Data Science</p>
                    </div>
                   </a>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Programming</p>
                    </div>
                   </a>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Javascript</p>
                    </div>
                   </a>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Productivity</p>
                    </div>
                   </a>
                   <a href='/lo' className='links2'> 
                    <div className='tags'>
                        <p> Machine Learning</p>
                    </div>
                   </a>
                   </div>
                   <h3><hr /></h3>
                   <div className='sn'>
                       <a href='/lo' className='links3'> Help</a>
                       <a href='/lo' className='links3'> Status</a>
                       <a href='/lo' className='links3'> Writers</a>
                       <a href='/lo' className='links3'> Blogs</a>
                       <a href='/lo' className='links3'> Careers</a>
                       <a href='/lo' className='links3'> Terms</a>
                       <a href='/lo' className='links3'> Knowable</a>

                   </div>
               </div>
           </div>
        </div>
    );
};

export default main;