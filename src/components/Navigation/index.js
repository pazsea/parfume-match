import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../hamburger.css';
import {
  closeNav,
  openNav,
  Nav,
  MobileNav,
  NavDiv,
  CartBtn,
  Carts,
} from './styles';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = ({ authUser, bigSize, mediumSize, smallSize }) =>
  authUser ? (
    <NavigationAuth
      authUser={authUser}
      bigSize={bigSize}
      mediumSize={mediumSize}
      smallSize={smallSize}
    />
  ) : null;

class NavigationAuth extends Component {
  state = {
    isActive: false,
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { authUser, bigSize, mediumSize, smallSize } = this.props;
    const { isActive } = this.state;

    if (bigSize) {
      return (
        <Nav isActive={isActive}>
          {/* <div id="logo">
      <p>Logga</p>
    </div> */}
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
              <Link to={ROUTES.QUIZ}>Doft-Quiz</Link>
            </li>

            {authUser.roles.includes(ROLES.ADMIN) && (
              <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
              </li>
            )}
            <li>
              <Link to={ROUTES.WARDROBE}>Wardrobe</Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
          <button
            className={isActive ? openNav : closeNav}
            type="button"
            onClick={this.toggleNav}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <CartBtn>
            <Carts />
          </CartBtn>
        </Nav>
      );
    } else if (mediumSize || smallSize) {
      return (
        <Fragment>
          <MobileNav>
            {/* <div id="logo">
    <p>Logga</p>
  </div> */}
            <button
              className={isActive ? openNav : closeNav}
              type="button"
              onClick={this.toggleNav}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </MobileNav>
          <NavDiv isActive={isActive}>
            <ul>
              <li>
                <Link to={ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
              </li>
              <li>
                <Link to={ROUTES.QUIZ}>Doft-Quiz</Link>
              </li>

              {authUser.roles.includes(ROLES.ADMIN) && (
                <li>
                  <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
              )}
              <li>
                <Link to={ROUTES.WARDROBE}>My Wardrobe</Link>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </NavDiv>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  bigSize: state.screenSizeState.bigSize,
  mediumSize: state.screenSizeState.mediumSize,
  smallSize: state.screenSizeState.smallSize,
});

export default connect(mapStateToProps)(Navigation);
