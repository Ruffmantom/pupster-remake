import React from "react";
import "../../styles/style.css";

var numberO = 23;

let image = "https://images.dog.ceo/breeds/setter-english/n02100735_1305.jpg"

const styles = {
  cardImage: {
    backgroundImage: "url(" + image + ")"
  },

};

function Discover(props) {
  return (
    <div className="main">
      <div className="container cardCont">
        <h1>Make New Friends!</h1>
        <h3>Thumbs up on any pups you'd like to meat :D</h3>
        <div className="card" style={styles.cardImage} >
          <button className="card-btn pass" data-value="pass"><i className="fa fa-thumbs-o-down"></i> </button>
          <button className="card-btn pick" data-value="pick"><i className="fa fa-thumbs-o-up"></i></button>
        </div>
        <h3>Your have made friends with {numberO} pups so far!</h3>
      </div>
    </div>
  );
}


export default Discover;


