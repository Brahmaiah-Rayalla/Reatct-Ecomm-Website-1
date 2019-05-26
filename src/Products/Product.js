import React from "react";
import Modal from "../Modal/Modal";
import "./Product.css";

class Product extends React.Component {
  state = {
    modalOpen: false
  };

  openModal(mode) {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    var product = this.props.prod;
    const imageUrl = require(`../static/${product.img}`);
    var modal = this.state.modalOpen ? (
      <Modal
        prodProps={product}
        show={this.state.modalOpen}
        close={this.closeModal.bind(this)}
      >
        Hi
      </Modal>
    ) : (
      ""
    );
    return (
      <div className="card">
        {modal}
        <div className="button-warn">
          <button
            className="btn btn-warning btn-md"
            onClick={this.openModal.bind(this)}
          >
            View Specs
          </button>
        </div>
        <div className="img">
          <img className="card-img-top" src={imageUrl} alt="Card image" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="card-text">
            <h4>${product.price}</h4>
          </div>

          <button className="btn btn-primary btn-lg" onClick={this.props.click}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
