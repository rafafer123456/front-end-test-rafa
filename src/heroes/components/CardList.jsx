
import React from 'react';
import axios from 'axios';
import { Card } from './';
/*import { useMemo } from 'react';
import { getResultByPublisher } from '../helpers';*/


export class CardList extends React.Component {
state = {
	blogs: []
}
componentDidMount() {
	axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0`)
	.then(response => {
	const {hits} = response.data;
	this.setState ({hits});
    console.log('hits')
    console.log(this.state.hits)
	})
    
}
render() {
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            this.state.hits ? this.state.hits.map( hit => (
                <Card   key={ hit.objectID }  { ...hit } />
            )) : 'no hay nada'
        }
    </div>
    )}
}