import React, { Component } from "react";

class Modal extends Component {
  render() {
    var product = this.props.prodProps;

    return (
      <div
        style={{
          transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0"
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{product.name}</h2>

            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.props.close}
            >
              <h1>
                <span aria-hidden="true">&times;</span>
              </h1>
            </button>
          </div>
          <div className="modal-body">
            <div className="img">
              <img
                className="card-img-top"
                src={require(`../static/${product.img}`)}
                alt="Card image"
              />
            </div>
            <h4>Price: ${product.price}</h4>
            <h4>Ram : {product.ram}</h4>
            <h4>Camera: {product.cam}</h4>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.close}
            >
              close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
