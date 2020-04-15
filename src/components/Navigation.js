import React, { Component } from 'react';
import {
    MDBNavItem,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
  } from 'mdbreact';

  class Navigation extends Component {
    state = {
      collapseID: ''
    };

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

    render(){
        return (
            <MDBNavbar
            color='info-color'
            dark
            expand='md'
            style={{ marginTop: '20px' }}
          >
            <MDBNavbarBrand>
              <strong className='white-text'>Restaurant</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <MDBCollapse id='navbarCollapse3' navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBLink to='#!'>Home</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>OrderFood</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Menu</MDBLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBLink
                    className='waves-effect waves-light d-flex align-items-center'
                    to='#!'
                  >
                    1<MDBIcon icon="shopping-cart"/>
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className='dopdown-toggle' nav>
                      <img
                        src='https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
                        className='rounded-circle z-depth-0'
                        style={{ height: '35px', padding: 0 }}
                        alt=''
                      />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>My account</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>Log out</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        );
    }
}

export default Navigation;
