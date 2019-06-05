import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MyCarousel.css";
import { Carousel } from "react-responsive-carousel";

class MyCarousel extends React.Component {
  render() {
    var myCarousel =
      this.props.prods.length > 0 ? (
        <Carousel
          className="slider-container"
          axis="horizontal"
          showThumbs={true}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          {this.props.prods.map((product, index) => (
            <div>
              <img src={require(`../static/${product.img}`)} alt="image" />
              <p className="legend">{product.name}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        ""
      );
    return <div>{myCarousel}</div>;
  }
}
export default MyCarousel;
