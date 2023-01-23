import Slider from "../components/Slider/Slider";

const HomePage = () => {
  return (
    <div className="md:flex md:justify-evenly md:h-[80vh]">
      <div className="md:w-[50%] flex flex-col justify-center md:pr-20 mb-4">
        <h1 className="text-orange text-xl md:text-4xl font-bold mb-4 md:mb-10">
          گیم استور
        </h1>
        <p className="md:text-2xl leading-relaxed">
          فروشگاه تخصصی عرضه بازی‌های اورجینال, بکاپ و همچنین فروش انواع گیفت
          کارت و آیتم برای تمامی پلتفرم‌ها
        </p>
      </div>
      <Slider />
    </div>
  );
};

export default HomePage;
