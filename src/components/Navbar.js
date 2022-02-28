import React, { useState } from 'react';
import './Navbar.css'
import mlogo from '../store/mlogo.png'
import hamb from '../store/bars-solid.svg'


const Navbar = () => {

    const [isOpen ,Opentoggle] = useState(false);

    function toggle() {
       (Opentoggle(!isOpen))
    }
    return (
        <div className='stick'>
            <div className='Navbar'>
                <span>
                    <img src={mlogo} alt="medium" className='mlogo'/>
                </span>
                <div className='menu'>
                <div className='resp-menu'>
                <span className='options'><a className='links' href="/lo">Our Story</a></span>
                <span className='options'><a className='links' href="/lo">Membership</a></span>
                <span className='options'><a className='links' href="/lo">Write</a></span>
                <span className='options'><a className='links' href="/lo">Sign in</a></span>
                <span className='options'><a className='links' href="/lo"><button className='start'>Get started</button></a></span>
                </div>
               
                <div className='responsive'>
                     <img src={hamb} alt="medium" className='hamb' onClick={() => Opentoggle(!isOpen)}/>
                 {isOpen ? <div>
                    <div className='resp-menu-2'>
                     <span className='options'><a className='links' href="/lo">Our Story</a></span>
                <span className='options'><a className='links' href="/lo">Membership</a></span>
                <span className='options'><a className='links' href="/lo">Write</a></span>
                <span className='options'><a className='links' href="/lo">Sign in</a></span>
                <span className='options'><a className='links' href="/lo"><button className='start'>Get started</button></a></span>
                     </div>
                 </div> : <div></div>}   
                    
                </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
