
import React from 'react';
import axios from 'axios';
import { Card } from './';

export class CardList extends React.Component {
state = {
	blogs: []
}
componentDidMount() {
	axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0`)
	.then(response => {
	const {hits} = response.data;
	this.setState ({hits});    
    console.log(this.state.hits)
	})
    
}
render() {
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            this.state.hits ? this.state.hits.map( hit => (
                (hit.created_at==null || hit.story_title==null || hit.story_url==null || hit.author==null)?
                '' : <Card   key={ hit.objectID }  { ...hit } />
            )) : 'Loading...'
        }
    </div>
    )}
}