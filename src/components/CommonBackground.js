import React, { Component } from 'react';
import Background from '../images/common_background.jpg';

var sectionStyle = {
  width: "100%",
  position: "absolute",
  opacity : 0.2,

  
};

class CommonBackgroundPage extends Component {
  render() {
    return (
      <div >
        <img style={ sectionStyle } src={ Background } />
      </div>
        

      

    );
  }
}
export default CommonBackgroundPage;