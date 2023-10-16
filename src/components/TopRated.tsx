import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Lottie from "react-lottie";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import animationData from "../assets/green-star.json";
import animationData2 from "../assets/green-stars.json";

const TopRated = () => {
  return (
    <div
      id="top-rated"
      className="section relative pt-24 max-w-7xl mx-auto"
    >
      <div className="absolute top-24 right-24">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={60}
          width={60}
        />
      </div>
      <div className="absolute bottom-12 left-16">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData2,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={200}
          width={200}
        />
      </div>{" "}
      <h1 className="mb-16 text-5xl text-gray-700 text-center font-semibold">
        Top Rated
      </h1>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51RP8pkEWeL._SX331_BO1,204,203,200_.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/517Tf2zA+QL._SX326_BO1,204,203,200_.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/411gybJjZJL._SX331_BO1,204,203,200_.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51zJppJNkkL._SX330_BO1,204,203,200_.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/41pk6ensPML._SY346_.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/51h-Rzxjy2L._SY346_.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default TopRated;
