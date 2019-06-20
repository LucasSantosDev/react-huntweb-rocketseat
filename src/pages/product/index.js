import React, { Component } from "react";

import api from "../../services/api";

import {} from "react-router-dom";

import "./styles.css";

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-info-main">
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </div>
        <div className="btn-voltar">
          <button onClick={this.props.history.goBack}>Voltar</button>
        </div>
      </div>
    );
  }
}
