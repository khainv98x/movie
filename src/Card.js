import React from 'react';

const Card = () => {
    return (
        <div>
            <a className='card-movie' href="">
                <div className="thum">
                    <img src="https://image.tmdb.org/t/p/w300/vOX1Zng472PC2KnS0B9nRfM8aaZ.jpg" alt="" />
                </div>
                <h2>Wolfs</h2>
                <p className='day'>2024-10-08
                    <i class="fa-solid fa-star"></i>
                </p>
            </a>
        </div>
    );
};

export default Card;