import { useEffect, useState } from "react";
import cod from "./../../assets/images/COD.jpg";
import er from "./../../assets/images/ER.jpg";
import fifa from "./../../assets/images/FIFA.jpg";
import horizon from "./../../assets/images/horizon.jpg";

const images = [cod, er, fifa, horizon];
const delay=2500;

const SlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow md:w-[50%]">
      <div className="slideshowSlider " style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}>
        {images.map((item, index) => (
          <div className="slide md:h-[550px]" key={index}  >
            <img src={item} alt="gameImage" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
