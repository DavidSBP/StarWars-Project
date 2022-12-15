import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import PersonalCard from '../components/PersonalCard';
import './CardCollection.css';

const CardCollection = () => {

    const [charList, setCharList] = useState();
    const [loaded, setLoaded] = useState(false);
    const [url, setUrl] = useState('https://swapi.dev/api/people/?page=');
    const [page, setPage] = useState(1);

    const nextPage = () =>{
        setPage(page + 1);
        
    }

    useEffect( ()=>{
        fetch(url + page)
        .then((res) => res.json())
        .then((character) => setCharList(character))
        .catch(err => console.log(err))
        .finally(() => setLoaded(true));
    }, []);

    return ( 
        <>
            {loaded === false ?(
                <br></br>
            ):(
                <input className='search' type= 'search'/>
            )}
            <div className='fully'>
                
                {loaded === false ?(
                    <p>Cargando...</p>
                ):(
                    charList.results.map((el) => <PersonalCard character={el}/>)
                )}
            </div>
            {loaded === false ?(
                <br></br>
            ):(
                <div className='bottom'>
                    <button className='nextButton' > {"<<"} </button>
                    <button className='nextButton' onClick={nextPage}> {">>"} </button>
                </div>
                
            )}
        </>
     );
}
 
export default CardCollection;