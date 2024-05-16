// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel({ slidePerView, category, autoplay }) {
  const [movies, setmovies] = useState([]);
  async function fetchMovie() {
    const response = await axios.get(
      "https://6627a8e2b625bf088c09307c.mockapi.io/netflix"
    );
    console.log(response.data);
    setmovies(response.data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <Swiper
        pagination={true}
        modules={
          autoplay
            ? [Autoplay, Pagination, Navigation]
            : [Pagination, Navigation]
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="carousel"
        slidesPerView={slidePerView}
      >
        {movies
          .filter((movie) => movie.category == category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
