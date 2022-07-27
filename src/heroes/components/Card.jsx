import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const Card = ({ 
    id,
    object_id,
    created_at,
    story_title,
    story_url,    
    publisher,
    author,
    first_appearance,
    characters ,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">                    
                    <div className="col-10">
                        <div className="card-body">
                            <span className="card-author">
                                {created_at} {author}
                            </span>                                                     
                    {
                        console.log('Heroe card')
                    }
                            {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                            <CharactersByHero characters={ characters } alter_ego={ author } />

                            <p className="card-text">
                                <span class="card-story">
                                    { story_title } { story_url }
                                </span>                                
                            </p>                            
                            
                        </div>
                    </div>

                    <div className="col-2">
                        <img src={ heroImageUrl } className="card-img" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
