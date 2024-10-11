import React, { useEffect, useState } from "react";
import "./ListMovie.css";
import {Container} from "react-bootstrap";
import CardMovie from "../../../Global/CardMovie/CardMovie";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../../../features/usefetch";


const ListMovie = (props) => { 
    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
    const movie=useFetch(`https://api.themoviedb.org/3/movie/${props.data}?api_key=${API_KEY}&page=1`)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    return (
        <div className="list-movie">
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>{props.title}</h2> 
                    {/* moc tu trang home.js */}
                </div>
                <Slider {...settings}>
                    {/* do gia tri tra ve cua movie la 1 mang [] nen phai map de lay tung key ra */}
                    {movie.map((item) => (
                        <div key={item.id}>
                            <CardMovie id={item.id} title={item.original_title} image={item.poster_path} date={item.release_date} vote={item.vote_average}></CardMovie>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default ListMovie;