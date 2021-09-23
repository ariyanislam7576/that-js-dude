import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import './Left.css'
 let data = [
    {
        title:"Angular2 Tutorial",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"50 Dev tool Tips",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"Interview Questions",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"Angular Interview Question",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"React Workshop for beginners",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"Angular2 Tutorial",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"console",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"scope & closure",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"this",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    },
    {
        title:"array",
        dis:"If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you"
    }
 ]
const Left = () => {
    return (
        <div>
            <h2 className='js-config'>JS Confusing Parts
            Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats.
            </h2>
            <div className='left-side'>
            {
                data.map(card => <Card title={card.title}
                dis={card.dis}></Card>)
            }
            </div>
        </div>
    );
};

export default Left;