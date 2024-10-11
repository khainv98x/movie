import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../../features/usefetch";
import "./DetailMovie.css";
const DetailMovie = () => {
  const { slug: movieID } = useParams();
  console.log(movieID);
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const detailMovie = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );
  console.log(detailMovie);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const trailerMovie= useFetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`)
  const findTrailer=trailerMovie.find((item)=>item.type==="Trailer");
  console.log(findTrailer);
  
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${detailMovie.poster_path}`}
            alt=""
          ></img>
        </Col>
        <Col lg={6}>
          {/* do detailMovie tra ve la 1 object {} nen lay truc tiep khong can map */}
          <h1>{detailMovie.original_title}</h1>
          <div class="yearPro d-flex align-items-center gap-2">
            <p class="year mb-0">{detailMovie.release_date}</p>
            <p class="kind">
              {detailMovie.genres &&
                detailMovie.genres.map((item) => item.name).join(",")}
            </p>
            <p class="time mb-0">
              <i class="fa-regular fa-clock"></i> {detailMovie.runtime} min
            </p>
          </div>
          <div class="rate d-flex align-items-center">
            <p class="number-rate">7.205%</p>
            <p class="user">user score</p>
            <p class="playtrailer" onClick={handleShow}>
              <i class="fa-solid fa-play"></i> Play trailer
            </p>
          </div>
          <h3>Can You Bury Your Past?</h3>
          <h2>Overview</h2>
          <p class="overview">{detailMovie.overview}</p>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="930"
            height="523"
            src={`https://www.youtube.com/embed/${findTrailer&&findTrailer.key}`}
            title="How to replace the Keyboard for HP ProBook 640 G4 and G5 Series Laptop"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DetailMovie;
