import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar/NavBar";
import Product from "./Products/Product";
import Modal from "./Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

class App extends React.Component {
  state = {
    products: [
      {
        name: "Samsumn Galaxy",
        price: 300,
        img: "SAMSUNG_Galaxy.png",
        ram: "8GB",
        cam: "15 pixels"
      },
      {
        name: "Motorola",
        price: 100,
        img: "Moto.jfif",
        ram: "4GB",
        cam: "8 pixels"
      },
      {
        name: "IPhone XS",
        price: 500,
        img: "iphone-xs.jfif",
        ram: "8GB",
        cam: "8 pixels"
      },
      {
        name: "OnePlus",
        price: 350,
        img: "OnePlus.jpg",
        ram: "8GB",
        cam: "12 pixels"
      },
      {
        name: "Nokia",
        price: 70,
        img: "Nokia.jpg",
        ram: "3GB",
        cam: "8 pixels"
      },
      {
        name: "RedMe",
        price: 50,
        img: "Redme.jpg",
        ram: "6GB",
        cam: "8 pixels"
      }
    ],
    count: 0,
    totalAmount: 0
  };

  addToCart = price => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ totalAmount: this.state.totalAmount + price });
  };

  resetCart = () => {
    this.setState({ count: 0 });
    this.setState({ totalAmount: 0 });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          count={this.state.count}
          totalAmount={this.state.totalAmount}
          reset={() => this.resetCart()}
        />
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-heading">Mobiles > </h2>
          </div>

          <div className="panel-body">
            <div className="card-columns">
              <ul>
                {this.state.products.map((product, index) => (
                  <Product
                    key={index}
                    prod={product}
                    click={this.addToCart.bind(this, product.price)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
