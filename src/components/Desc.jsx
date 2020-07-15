import React, { Component } from "react";
import "../styles/Desc.css";
class Desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/" +
        this.props.match.params.id +
        "/detail"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) return <h2>Loading</h2>;

    return (
      <div className="dmain">
        <img className="dimg" src={this.state.data.image} />
        <div className="wmain">
          <div className="wmaintop">
            <h5>{this.state.data.name}</h5>
            <p>{this.state.data.price}</p>
          </div>

          <p className="wmainb">{this.state.data.description}</p>
        </div>
      </div>
    );
  }
}

export default Desc;
