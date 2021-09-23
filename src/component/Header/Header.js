import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
             <div className='nav'>
           <h2>That js dude</h2>
           <button>sign in</button>
            </div>
            <div className='banner'>
                <h1>Exclusive React Workshop for beginners!</h1>
                <p>Once in a year opportunity to learn and build your first React app</p>
                <button>Learn more</button>
             </div>
            
        </div>
       
    );
};

export default Header;