import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import ListMovie from '../Home/ListMovie/ListMovie';
import useFetch from '../../../features/usefetch';
import CardMovie from '../../Global/CardMovie/CardMovie';
import { useParams } from 'react-router-dom';

const Movie = () => {
const {slug:keySearch}=useParams();
    console.log(keySearch);
    const [page,setPage]=useState(1);
    const [allmovie, setAllMovie]=useState([]);
    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
    const movie=useFetch(keySearch?`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=${page}`:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`)
   
    useEffect(()=>{
        if(keySearch){
            setAllMovie(movie);
        }else{
            setAllMovie([...allmovie,...movie]);
        }
        setPage(1);
    },[movie]);

    useEffect(()=>{
        
    },[page]);

    return (
        
        <div>
            <Container>
                {/* <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <p>LIST MOVIE</p>
                </div> */}
                <Row>
                {allmovie.map((item) => (
                        <Col lg={3}>
                         <CardMovie id={item.id} title={item.original_title} image={item.poster_path} date={item.release_date} vote={item.vote_average}></CardMovie>
                        </Col>    
                    ))}
                </Row>
                <button onClick={()=>setPage(page+1)}>Show more</button>
            </Container>
        </div>
    );
};

export default Movie;