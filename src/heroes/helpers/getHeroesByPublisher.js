import { heroes } from '../data/heroes';
import axios from "axios";

export const getHeroesByPublisher = ( publisher ) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}

export const getResultByPublisher = () => {
    axios
    .get("https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };
    getResultByPublisher();
