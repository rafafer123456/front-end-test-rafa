
import * as moment_ from 'moment';

const moment = moment_;

export const Card = ({     
    objectID,
    created_at,
    story_title,
    story_url,    
    author,
}) => {
    
    const heartImageUrl = `/assets/heart-transparent.jpg`;
    
    return (
        <div className="col-xs-12 animate__animated animate__fadeIn">
            <div className="card">                
                <div className="row no-gutters">                    
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                        <div className="card-body">
                            <span className="card-author">
                                {moment(created_at).format('h [hours], MMMM') } by {author}
                            </span>                                                                         
                            <p className="card-text">
                                <span className="card-story">
                                    { story_title } { story_url }
                                </span>                                
                            </p>                                                        
                        </div>
                    </div>

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 d-flex justify-content-center text-center">
                        <span>
                            <a href=""><img src={ heartImageUrl } className="card-img" alt="" /></a>
                        </span>                        
                    </div>
                </div>

            </div>
        </div>
    )
}
