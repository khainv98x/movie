import React from 'react';
import { Link } from 'react-router-dom';
const CardMovie = (props) => {
    return (
        
        <div>
            <Link to={`detail/${props.id}`} className='cardmovie' >
                            <div className='thumb'>
                                <img src={`https://image.tmdb.org/t/p/w300/${props.image}`} alt="" />
                            {/* image moc tu trang ListMove */}
                            </div>
                            <h3 className='mb-3 mt-2'>${props.title}</h3>
                            <div className='number d-flex align-items-center'>
                                <p className='day'>${props.date}</p>
                                <p className='rate'>
                                <i class="fa-solid fa-star"></i>${props.vote}
                                </p>
                            </div>
            </Link>
        </div>
    );
};

export default CardMovie;