import React from 'react';
import JhonDoe from '../assets/img/JhonDoe.png';
import './PersonalCard.css'

const PersonalCard = (props) => {
    return (  
        <div className='card'>
            <img className='photo' src={JhonDoe} />
            <p>Name: {props.character.name}</p>
            <p>Height: {props.character.height} cm</p>
            <p>Mass: {props.character.mass} kg</p>
            <p>Gender: {props.character.gender}</p>
        </div>
    );
}
 
export default PersonalCard;
