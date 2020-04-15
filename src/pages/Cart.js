import React, { Component } from 'react';
import axios from 'axios';

import {
MDBJumbotron,
MDBBtn,
MDBContainer,
MDBInput,
MDBCard,
MDBCardBody,
MDBTable,
MDBTableHead,
MDBTableBody,
MDBCol} from 'mdbreact';

import SectionContainer from './../components/sectionContainer';
import Header from '../components/Header';

class Cart extends Component{

    constructor (props){
        super(props);
        this.saveOrder = this.saveOrder.bind(this);
      }

    state = {
        cartItems: this.props.location.state.cartItems,
        email: '',
        phone: '',
        total: 0,
        special_instructions: ''
      };

      nextInputRef = null;

      componentDidMount(){
            this.state.cartItems.map(c => (
                this.setState(prevState => ({total:prevState.total + c.sub_total }))
            ));
      }

      changeHandler = event => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
      };

      saveOrder(){
        let token = sessionStorage.getItem('token');
        //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWFyeUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRRakIyUGhERUlVMEtrdkMzaFE3SFN1TGliUi44ZGQuRG9hQnpHLm5IVll5OUpOQ3NKeEhaRyJ9LCJpYXQiOjE1ODYwODA5OTMsImV4cCI6MTU4NjQ0MDk5M30.o6x_M6OVvYQ7aEopMZmXSKFa2C8VaLKJIiF09NGMKXY';
        let config = {
            headers: {
                'x-auth-token': token
              }
        };
        let orderData = {
              order_items: this.state.cartItems.map(c => {return {name: c.name,quantity: c.quantity, sub_total: c.sub_total};}),
              email: this.state.email,
              phone: this.state.phone,
              Total: this.state.total,
              special_instructions: this.state.special_instructions,
              status: "Accepted"
      };
      console.log(orderData);
        axios
        .post('https://peddirst.herokuapp.com/api/orders', orderData, config)
        .then(response => {
          console.log(response.data);
          this.props.history.push('/success');
        }).catch(error => {
            console.log('error ', error.response);
          });
      }

 render(){
     return (
         <MDBContainer>
        <SectionContainer noBorder>
        <MDBJumbotron className='text-center'>
          <h2 className='h1 display-3'>Order Details!</h2>
          <MDBCol md='12'>
          <SectionContainer noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBTable borderless>
                <MDBTableHead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                      {this.state.cartItems.map(c => (
                        <tr>
                        <td>{c.name}</td>
                        <td>{c.quantity}</td>
                        <td>{c.sub_total}</td>
                        </tr> 
                      ))}
                      <tr>
                          <td colSpan='2'>Total</td>
                            <td>{this.state.total}</td>
                      </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
          <hr className='my-2' />
          <MDBInput
                label='Please enter your email'
                inputRef={ref => (this.nextInputRef = ref)}
                name='email'
                onChange={this.changeHandler}
              />
              <MDBInput
                label='Please enter your phone'
                inputRef={ref => (this.nextInputRef = ref)}
                name='phone'
                onChange={this.changeHandler}
              />
          <div className='form-group'>
            <label htmlFor='special_instructions'>
              Special Instructions
            </label>
            <textarea
              className='form-control'
              id='special_instructions'
              rows='5'
              name='special_instructions'
              onChange={this.changeHandler}

            />
          </div>
          <p className='lead'>
            <MDBBtn color='primary' onClick={this.saveOrder}>Place Order</MDBBtn>
          </p>
        </MDBJumbotron>
      </SectionContainer>
      </MDBContainer>
     );
 }
}

export default Cart;
