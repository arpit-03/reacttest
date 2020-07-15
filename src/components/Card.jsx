import React, { Component } from "react";
import Popup from "reactjs-popup";
import "../styles/Card.css";
import { Link } from "react-router-dom";
class Card extends Component {
  state = {};
  render() {
    if (window.innerWidth < 900)
      return (
        <div className=" col-6 col-md-4 col-lg-2">
          <Link to={"/list/" + this.props.id}>
            <div className="cardiv">
              <img className="cardimg" src={this.props.image} />
              <div className="list">
                <h5>{this.props.name}</h5>
                <p>{this.props.price}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    else
      return (
        <div className=" col-6 col-md-4 col-lg-2">
          <Popup
            trigger={
              <div className="cardiv">
                <img className="cardimg" src={this.props.image} />
                <div className="list">
                  <h5>{this.props.name}</h5>
                  <p>{this.props.price}</p>
                </div>
              </div>
            }
          >
            <div>
              <object
                className="opopup"
                type="text/html"
                data={"http://localhost:3000/list/" + this.props.id}
                width="400px"
                height="400px"
              ></object>
            </div>
          </Popup>
        </div>
      );
  }
}

export default Card;
