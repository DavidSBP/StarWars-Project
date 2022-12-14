import React from 'react';
import PersonalCard from '../components/PersonalCard';
import './CardCollection.css'

const CardCollection = () => {
    return ( 
        <>
            <input className='search' type= 'search'/>
            <div className='fully'>
                <PersonalCard/>
                <PersonalCard/>
                <PersonalCard/>
                <PersonalCard/>
                <PersonalCard/>
            </div>
        </>
     );
}
 
export default CardCollection;