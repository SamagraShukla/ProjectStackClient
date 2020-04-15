import React, { Component } from 'react';
import Header from '../components/Header';
import SectionContainer from '../components/sectionContainer'

import {MDBContainer,
MDBAlert,
MDBBtnGroup,
MDBBtn} from 'mdbreact';

class Success extends Component {
render(){
    return(
        <MDBContainer>
        <SectionContainer >
        <MDBAlert color='success'>
          <h4 className='alert-heading'>Well done!</h4>
          <p>
            Aww yeah, you successfully placed your order. Thank you
            for choosing online services to order your food. Be sure to check our new locations
            as provided in our website and conatct us if any enquiries.
          </p>
          <hr />
          <p className='mb-0'>
            Make sure to stay in home and keep safe distance. Do our part in response to control COVID-19. Thanks!
          </p>
        </MDBAlert>
        <MDBBtnGroup>
        <MDBBtn href='/order'>Order More</MDBBtn>
        </MDBBtnGroup>
      </SectionContainer>
      </MDBContainer>
    );
}
}

export default Success;