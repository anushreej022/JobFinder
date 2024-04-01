import React from "react";
class Cards extends React.Component {
  render() {
    var name = this.props.id;

    var cardStyle = {
        margin: "50px",
        padding: 0
    };
    var pStyle = {
        color: "brown"
    };
    return (
      <div className="card custom-card" style={cardStyle}>
        <div className="card-header">{name}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p style={pStyle}>{"This is the " + name + " page"}</p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Cards;