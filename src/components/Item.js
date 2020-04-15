import React from 'react';
import {MDBBtn,
MDBCollapse,
MDBCard,
MDBCardBody,
MDBCardTitle,
MDBCardText,
MDBIcon,
MDBBadge} from 'mdbreact';
import SectionContainer from './sectionContainer';
class Item extends React.Component{
    state = {
        item : this.props.item,
        collapseID: '',
        quantity : 1
    };
    decrementQuantity = () => {
        this.state.quantity === 1 ? this.setState(prevState => ({quantity:prevState.quantity})) : this.setState(prevState => ({quantity:prevState.quantity - 1 }))
    };
    incrementQuantity = () => {
        this.setState(prevState => ({quantity:prevState.quantity + 1 }))
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
      };

    sendDatatoCart = () => {
            const item=[];
            item.name = this.state.item.name;
            item.quantity = this.state.quantity;
            item.sub_total = this.state.quantity * this.state.item.unit_price;
            this.props.addtoCart(item);
    }

    render(){
        const { collapseID } = this.state;
        return(
            <div>
            <MDBBtn outline block onClick={this.toggleCollapse('details')} style={{ marginBottom: '0.5rem' }}>
            <h3>{this.state.item.name}</h3>
            <p>{this.state.item.unit_price}</p>
            </MDBBtn>
            <MDBCollapse id='details' isOpen={collapseID}>
            <SectionContainer className='justify-content-center d-flex'>
            <MDBCard style={{ width: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>{this.state.item.name}</MDBCardTitle>
                <MDBCardText>
                    {this.state.item.description}
                </MDBCardText>
                <div className="d-flex flex-sm-row">
                <MDBBtn tag="a" size="sm" floating gradient="blue" onClick={this.decrementQuantity}>
                        <MDBIcon icon="minus" />
                </MDBBtn>
                    <MDBBadge color="info">{this.state.quantity}</MDBBadge>
                    <MDBBtn tag="a" size="sm" floating gradient="blue" onClick={this.incrementQuantity}>
                        <MDBIcon icon="plus" />
                </MDBBtn>
        <MDBBtn href='#' onClick={this.sendDatatoCart}>ADD to Cart - ${this.state.quantity * this.state.item.unit_price}</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
            </SectionContainer>
            </MDBCollapse>
            </div>
        );
    }
}

export default Item;