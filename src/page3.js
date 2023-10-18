import React, { Component } from "react";

class Page3 extends Component {
  constructor() {
    super();
    this.state = {
      showParagraph: false,
    };
  }
  
  

  handleClick = () => {
    this.setState({
      showParagraph: !this.state.showParagraph,
    });
  };
  
  render() {
    return (
      <div className="page3">
        <div className="head3">
          <h1 className="Dive">Dive Into Our Services</h1>
        </div>
        <div className="service">
          <h1 className="package">Special Packages:</h1>
          <h3 className="learnMore" onClick={this.handleClick}>
            Learn More. . .
          </h3>
          </div>
          {this.state.showParagraph && (
            <p className="more">We offer special grooming packages for those who seek the ultimate experience. From grooming for special occasions to monthly maintenance packages, we have options to suit every need.

At [Company Name], we're dedicated to delivering excellence in every service we provide. Whether you're visiting us for the first time or you're a long-time client, we're here to ensure you look and feel your best. Dive into our services and experience the difference that exceptional grooming can make in your life.</p>
          )}


          <div className="service">
          <h1 className="package">Special Packages:</h1>
          <h3 className="learnMore" onClick={this.handleClick}>
            Learn More. . .
          </h3>
          </div>
          {this.state.showParagraph && (
            <p className="more">We offer special grooming packages for those who seek the ultimate experience. From grooming for special occasions to monthly maintenance packages, we have options to suit every need.

At [Company Name], we're dedicated to delivering excellence in every service we provide. Whether you're visiting us for the first time or you're a long-time client, we're here to ensure you look and feel your best. Dive into our services and experience the difference that exceptional grooming can make in your life.</p>
          )}


          <div className="service">
          <h1 className="package">Beard Grooming:</h1>
          <h3 className="learnMore" onClick={this.handleClick}>
            Learn More. . .
          </h3>
          </div>
          {this.state.showParagraph && (
            <p className="more">For the modern man with facial hair, our beard grooming services ensure your beard stays well-maintained and stylish. From trimming to shaping, we'll keep your beard looking its best.</p>
          )}
          
      </div>
    );
  }
}

export default Page3;
