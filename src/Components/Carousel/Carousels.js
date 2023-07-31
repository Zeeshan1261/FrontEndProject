import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Carousels() {
  return (
    <Carousel
      data-bs-theme="dark"
      style={{ marginBottom: "2rem", height: "525px" }}
    >
      <Carousel.Item style={{ width: "80rem", height: "30rem" }}>
        <img
          className="w-100"
          src="one.avif"
          alt="First slide"
          style={{ marginBottom: "1rem" }}
        />
        <Carousel.Caption>
          <Button variant="secondary">ExploreNow</Button>
          {/* <h5>First </h5> */}
          {/* <p>Paragraph</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "80rem", height: "30rem" }}>
        <img className="d-block w-100" src="caro.jpg" alt="Second slide" />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "80rem", height: "30rem" }}>
        <img
          className="d-block w-100"
          src="carouseltwo.avif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
