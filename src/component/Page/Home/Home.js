import React from "react";
import Banner from "./Banner/Banner";
import ListMovie from "./ListMovie/ListMovie";

const Home = () => {
    //Mang danh sach phim hien thi tren trang chu
    const arrMovie=[
        {
            id:1,
            title_name:"Now Playing Movie",
            data_name:"now_playing"
            //chi can thay 1 gia tri trong link API bang cach props no ben CardMovie ta se truy cap dc 3 API vao 3 list khac nhau:<https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1>
        },
        {
            id:2,
            title_name:"Upcoming Movie",
            data_name:"upcoming",
        },
        {
            id:3,
            title_name:"Top Rated Movie",
            data_name:"top_rated",
        },
    ]
    return (
        <>
            <Banner></Banner>
            {arrMovie.map((item)=>(
                <ListMovie key={item.id} title={item.title_name} data={item.data_name}></ListMovie>
            ))} 
            
        </>
    );
};

export default Home;
