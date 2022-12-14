import React from 'react';
import JhonDoe from '../assets/img/JhonDoe.png';
import './PersonalCard.css'

const PersonalCard = () => {
    return (  
        <div className='card'>
            <img className='photo' src={JhonDoe} />
            <p>Name: Luke Skywalker</p>
            <p>Height: 172 cm</p>
            <p>Mass: 77 kg</p>
            <p>Gender: male</p>
        </div>
    );
}
 
export default PersonalCard;
