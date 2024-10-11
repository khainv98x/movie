import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data.results?data.results:data);
        } catch (err) {
            alert(err);
        }
    };
    useEffect(() => {
        getMovie();
    }, [url]);// moi lan url thay doi thi no load lai
    return movie;

};

export default useFetch;