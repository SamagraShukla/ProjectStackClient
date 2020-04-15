import React, { Component } from 'react';
import Background from '../images/home_background.jpg';

var sectionStyle = {
  width: "100%",
  position: "absolute",
  opacity : 0.8,

  
};

class HomePage extends Component {
  render() {
    return (
      <div >
        <h1>Welcome</h1>
        <img style={ sectionStyle } src={ Background } />
      </div>
        

      

    );
  }
}
export default HomePage;