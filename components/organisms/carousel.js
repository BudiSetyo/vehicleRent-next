import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-old-silver">
        <Slider className="" {...settings}>
          <div>
            <h1>Carousel</h1>
          </div>
          <div>
            <h1>Carousel</h1>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
