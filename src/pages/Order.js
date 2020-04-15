import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Item from '../components/Item';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTooltip
} from 'mdbreact';
import SectionContainer from './../components/sectionContainer';
import { Link } from 'react-router-dom';

class Order extends Component {
  state = {
    activeItem: '1',
    items: [],
    cartList: []
  };

  componentDidMount() {
    if(sessionStorage.getItem('token') === null){
      this.props.history.push('/login');
    }
    axios.get('https://peddirst.herokuapp.com/api/items').then(response => {
      this.setState({ items: response.data });
      console.log(response);
    });
  }

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  handleAddToCartList = (item) => {
    const cList = this.state.cartList;
    cList.push(item);
    this.setState(prevState => ({cartList:cList}));
  }


  render() {
    const { activeItem } = this.state;
    return (
      <MDBContainer>
          <MDBRow>
          <MDBCol xl='4' md='12' className='mb-xl-0 d-flex align-center'>
            <div className='btn-toolbar' role='toolbar'>
              <MDBBtnGroup>
                <Link to={{
              pathname: '/cart',
              state: { cartItems: this.state.cartList}
                }}>
                <MDBTooltip placement='right'>
                <MDBBtn href='#'>Go to Cart</MDBBtn>
                 <div>{this.state.cartList.length}</div>
                </MDBTooltip>
                </Link>
              </MDBBtnGroup>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12'>
              <SectionContainer header='Delivery and Takeaway'>
                <MDBNav className='nav-tabs'>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '1'}
                      onClick={this.toggle('1')}
                      role='tab'
                    >
                      Starters
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '2'}
                      onClick={this.toggle('2')}
                      role='tab'
                    >
                      Mains
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '3'}
                      onClick={this.toggle('3')}
                      role='tab'
                    >
                      Sides
                    </MDBNavLink>
                  </MDBNavItem><MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '4'}
                      onClick={this.toggle('4')}
                      role='tab'
                    >
                      Desserts | Drinks
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={activeItem}>
                  <MDBTabPane tabId='1' role='tabpanel'>
                  <div>
                    {this.state.items.filter(starter => starter.category === "starters").map(item => (
                     <Item item={item} key={item._id} addtoCart = {this.handleAddToCartList} />
                    ))}
                  </div>
                  </MDBTabPane>
                  <MDBTabPane tabId='2' role='tabpanel'>
                  <div>
                    {this.state.items.filter(starter => starter.category === "mains").map(item => (
                     <Item item={item} key={item._id} addtoCart = {this.handleAddToCartList}/>
                    ))}
                  </div>
                  </MDBTabPane>
                  <MDBTabPane tabId='3' role='tabpanel'>
                  <div>
                    {this.state.items.filter(starter => starter.category === "sides").map(item => (
                     <Item item={item} key={item._id} addtoCart = {this.handleAddToCartList}/>
                    ))}
                  </div>
                  </MDBTabPane>
                  <MDBTabPane tabId='4' role='tabpanel'>
                  <div>
                    {this.state.items.filter(starter => starter.category === "desserts|drinks").map(item => (
                     <Item item={item} key={item._id} addtoCart = {this.handleAddToCartList}/>
                    ))}
                  </div>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default Order;
