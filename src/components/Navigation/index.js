import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../hamburger.css';
import { closeNav, openNav, Nav } from './styles';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = ({ authUser }) =>
  authUser ? <NavigationAuth authUser={authUser} /> : null;

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
    const { authUser } = this.props;
    const { isActive } = this.state;
    return (
      <Nav isActive={isActive}>
        <div>
          <p>Logga</p>
        </div>
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
        <button
          className={isActive ? openNav : closeNav}
          type="button"
          onClick={this.toggleNav}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <button>Cart</button>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
