import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Messages from '../Messages';

class HomePage extends Component {
  state = {
    name: '',
    brand: '',
  };

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  addParfume = () => {
    const { brand, name } = this.state;
    fetch(
      `http://localhost:4000/parfumes/add?brand=${brand}&name=${name}`,
    ).catch(err => console.error(err));
  };

  render() {
    const { parfumes } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        {parfumes
          ? parfumes.slice(172, 175).map((parfume, index) => (
              <div key={index}>
                <p key={index}>{parfume.name}</p>
                <p key={'name' + index}>{parfume.brand}</p>
              </div>
            ))
          : null}
        {/* <Messages users={this.props.users} /> */}

        <input
          type="text"
          value={this.state.name}
          placeholder="name"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          value={this.state.brand}
          placeholder="brand"
          onChange={e => this.setState({ brand: e.target.value })}
        />
        <button onClick={this.addParfume}>KLICKA</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userState.users,
  parfumes: state.getAllState.data,
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users }),
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthorization(condition),
)(HomePage);
