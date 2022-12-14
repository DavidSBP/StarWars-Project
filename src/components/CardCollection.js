import React, {useState, useEffect} from 'react';
import PersonalCard from '../components/PersonalCard';
import './CardCollection.css';

const CardCollection = () => {

    const [charList, setCharList] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( ()=>{
        fetch('https://swapi.dev/api/people/')
        .then((res) => res.json())
        .then((character) => setCharList(character))
        .catch(err => console.log(err))
        .finally(() => setLoaded(true));
    }, []);

    return ( 
        <>
            <input className='search' type= 'search'/>
            <div className='fully'>
                {console.log(charList)}
                {loaded === false ?(
                    <>
                        <p>lel</p>
                    </>
                ):(
                    charList.results.map((el) => <PersonalCard character={el}/>)
                )}
            </div>
        </>
     );
}
 
export default CardCollection;