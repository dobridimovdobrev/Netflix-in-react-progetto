import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css'; 

function Carousel(props) {
  
  return (
    <div className="movie-carousel">
      <h2 className="carousel-title">{props.title}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          992: { slidesPerView: 5, spaceBetween: 10 },
          1200: { slidesPerView: 6, spaceBetween: 10 }
        }}
        navigation={true}
        className="netflix-swiper"
        style={{width: '100%'}}
      >
        {props.movies.map((movie, index) => (
          <SwiperSlide key={index} className="movie-slide">
            <div className="movie-card">
              <img src={movie.image} alt={movie.title} className="movie-poster" />
              {movie.badge && (
                <div className="movie-badge">{movie.badge}</div>
              )}
              <div className="movie-overlay">
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;