import React, { Component } from 'react';
import axios from 'axios';

import {
MDBJumbotron,
MDBContainer,
MDBCol,
MDBRow,
MDBNav,
MDBNavItem,
MDBTabPane,
MDBLink,
MDBTabContent} from 'mdbreact';

import SectionContainer from './../components/sectionContainer';
import Header from '../components/Header';

class Menu extends Component {
    state = {
        items: [],
        activeItemPills: '1'
      };

      togglePills = tab => () => {
        const { activePills } = this.state;
        if (activePills !== tab) {
          this.setState({
            activeItemPills: tab
          });
        }
      };
    
      componentDidMount() {
        axios.get('https://peddirst.herokuapp.com/api/items').then(response => {
          this.setState({ items: response.data });
          console.log(response);
        });
      }

      render(){
        const { activeItemPills } = this.state;
          return(
                <MDBContainer>
                    <SectionContainer>
                    <MDBJumbotron className='text-center'>
                    <h3 className='h3 display-3'>Our Menu</h3>
                    </MDBJumbotron>
                    <MDBRow>
            <MDBCol md='12'>
              <SectionContainer>
                <MDBNav className='nav-pills'>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '1'} onClick={this.togglePills('1')} link>
                      Starters
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '2'} onClick={this.togglePills('2')} link>
                      Mains
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '3'} onClick={this.togglePills('3')} link>
                      Sides
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '4'} onClick={this.togglePills('4')} link>
                      Desserts | Drinks
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={activeItemPills}>
                  <MDBTabPane tabId='1'>
                      <SectionContainer>
                  <MDBRow>
          <MDBCol lg="7">
          <div>
                    {this.state.items.filter(starter => starter.category === "starters").map(item => (
            <MDBRow className="mb-3">
              <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">{item.name}</h5>
                <p className="grey-text">
                  {item.description}
                </p>
              </MDBCol>
              <MDBCol md="1" size="2">
              <h5 className="font-weight-bold mb-3">${item.unit_price}</h5>
              </MDBCol>
            </MDBRow>
            ))}
            </div>
          </MDBCol>
        </MDBRow>
        </SectionContainer>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                  <SectionContainer>
                  <MDBRow>
          <MDBCol lg="7">
          <div>
                    {this.state.items.filter(starter => starter.category === "mains").map(item => (
            <MDBRow className="mb-3">
              <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">{item.name}</h5>
                <p className="grey-text">
                  {item.description}
                </p>
              </MDBCol>
              <MDBCol md="1" size="2">
              <h5 className="font-weight-bold mb-3">${item.unit_price}</h5>
              </MDBCol>
            </MDBRow>
            ))}
            </div>
          </MDBCol>
        </MDBRow>
        </SectionContainer>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                  <SectionContainer>
                  <MDBRow>
          <MDBCol lg="7">
          <div>
                    {this.state.items.filter(starter => starter.category === "sides").map(item => (
            <MDBRow className="mb-3">
              <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">{item.name}</h5>
                <p className="grey-text">
                  {item.description}
                </p>
              </MDBCol>
              <MDBCol md="1" size="2">
              <h5 className="font-weight-bold mb-3">${item.unit_price}</h5>
              </MDBCol>
            </MDBRow>
            ))}
            </div>
          </MDBCol>
        </MDBRow>
        </SectionContainer>
                  </MDBTabPane>
                  <MDBTabPane tabId='4'>
                  <SectionContainer>
                  <MDBRow>
          <MDBCol lg="7">
          <div>
                    {this.state.items.filter(starter => starter.category === "desserts|drinks").map(item => (
            <MDBRow className="mb-3">
              <MDBCol md="11" size="10">
                    <h5 className="font-weight-bold mb-3">{item.name}</h5>
                <p className="grey-text">
                  {item.description}
                </p>
              </MDBCol>
              <MDBCol md="1" size="2">
              <h5 className="font-weight-bold mb-3">${item.unit_price}</h5>
              </MDBCol>
            </MDBRow>
            ))}
            </div>
          </MDBCol>
        </MDBRow>
        </SectionContainer>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
                    </SectionContainer>
                </MDBContainer>
          );
      }
}

export default Menu;
