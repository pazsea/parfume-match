import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthentication } from '../Session/';
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
  MobileCart,
} from './styles';

import logo from '../../images/logoblack.png';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as a from '../../constants/actionTypes';
// import * as ROLES from '../../constants/roles';

const Navigation = ({
  authUser,
  bigSize,
  mediumSize,
  smallSize,
  firebase,
  onSetAuthUser,
  onSetWardrobe,
}) =>
  authUser ? (
    <NavigationAuth
      firebase={firebase}
      authUser={authUser}
      bigSize={bigSize}
      mediumSize={mediumSize}
      smallSize={smallSize}
      onSetAuthUser={onSetAuthUser}
      onSetWardrobe={onSetWardrobe}
    />
  ) : null;

class NavigationAuth extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {
    const {
      firebase,
      onSetAuthUser,

      authUser: { uid },
    } = this.props;

    firebase.user(uid).on('value', snapshot => {
      const aUser = Object.assign({}, snapshot.val(), { uid });
      onSetAuthUser(aUser);
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.user().off();
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { bigSize, mediumSize, smallSize } = this.props;
    const { isActive } = this.state;

    if (bigSize) {
      return (
        <Fragment>
          <Nav isActive={isActive}>
            <img alt="logo" src={logo} />

            <ul>
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.PROFILE}>
                  Profil
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.EXPLORE}>
                  Inspiration
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.QUIZ}>
                  Doft-Quiz
                </Link>
              </li>

              {/* {authUser.roles.includes(ROLES.ADMIN) && (
                <li>
                  <Link onClick={this.toggleNav} to={ROUTES.ADMIN}>
                    Admin
                  </Link>
                </li>
              )} */}
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.WARDROBE}>
                  Garderob
                </Link>
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
        </Fragment>
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
          <MobileCart>
            <Carts />
          </MobileCart>
          <NavDiv isActive={isActive}>
            <ul>
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.PROFILE}>
                  Profile
                </Link>
              </li>
              {/* <li>
                <Link onClick={this.toggleNav} to={ROUTES.ACCOUNT}>
                  Account
                </Link>
              </li> */}
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.QUIZ}>
                  Doft-Quiz
                </Link>
              </li>

              {/* {authUser.roles.includes(ROLES.ADMIN) && (
                <li>
                  <Link onClick={this.toggleNav} to={ROUTES.ADMIN}>
                    Admin
                  </Link>
                </li>
              )} */}
              <li>
                <Link onClick={this.toggleNav} to={ROUTES.WARDROBE}>
                  My Wardrobe
                </Link>
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

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser =>
    dispatch({ type: a.AUTH_USER_SET, authUser }),
  // onSetWardrobe: wardrobe =>
  //   dispatch({ type: a.WARDROBE_USER_SET, wardrobe }),
});

export default compose(
  withAuthentication,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Navigation);
