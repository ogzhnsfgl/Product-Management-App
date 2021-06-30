import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Label,
  Button,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <Nav>
        <NavItem>
          <NavLink>Sepet Boş</NavLink>
        </NavItem>
      </Nav>
    );
  }

  // removeFromCart = (product) => {
  //   this.props.actions.removeFromCart(product);
  // };

  renderSummary() {
    return (
      <Nav>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepet
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((p) => (
              <DropdownItem key={p.product.id}>
                <Button
                  onClick={() => this.props.actions.removeFromCart(p.product)}
                >
                  X
                </Button>
                {p.product.productName}{" "}
                <Label class="badge" pill>
                  {p.quantity}
                </Label>
              </DropdownItem>
            ))}
            <DropdownItem divider></DropdownItem>
            <DropdownItem>
              {" "}
              <Link to={"/cart"}>Sepete Git</Link>{" "}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
