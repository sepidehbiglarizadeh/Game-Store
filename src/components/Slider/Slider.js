import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import cod from "./../../assets/images/COD.jpg";
import er from "./../../assets/images/ER.jpg";
import fifa from "./../../assets/images/FIFA.jpg";
import horizon from "./../../assets/images/horizon.jpg";

const images = [cod, er, fifa, horizon];

const Slider = () => {
  return (
    <div className="md:w-[50%] h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="game-image" className="w-full h-full rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
