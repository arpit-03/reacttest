import React, { Component } from "react";
import Card from "./Card";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ products: data.products, isLoading: false })
      );
  }

  render() {
    console.log(this.props.match.params.id);
    if (this.state.isLoading) return <h2>Loading</h2>;
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.products.map((d) => (
            <Card
              key={d.product_id}
              id={d.product_id}
              name={d.name}
              price={d.price}
              image={d.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
