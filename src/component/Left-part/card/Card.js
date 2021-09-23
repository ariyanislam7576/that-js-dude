import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props);
    return (
        <div className='left-card'>
            <h1>{props.title}</h1>
            <p>{props.dis}</p>
            <button>view detail</button>
        </div>
    );
};

export default Card;