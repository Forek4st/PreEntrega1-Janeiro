import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import m4mini from "../../assets/offers/m4-mini.jpg";
import carouselImg from "../../assets/offers/carousel-img.webp";

function Offers() {
  return (
    <main className="carousel-container">
      {" "}
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={m4mini} alt="Mac Mini M4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg} alt="Mac Mini M4" />
        </Carousel.Item>
      </Carousel>
    </main>
  );
}

export default Offers;
