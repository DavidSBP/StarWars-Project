import React from 'react';
import JhonDoe from '../assets/img/JhonDoe.png';
import './PersonalCard.css'

const PersonalCard = () => {
    return (  
        <div className='card'>
            <img className='photo' src={JhonDoe} />
            <p>Luke Skywalker</p>
            <p>172 cm</p>
            <p>77 kg</p>
            <p>male"</p>
        </div>
    );
}
 
export default PersonalCard;
