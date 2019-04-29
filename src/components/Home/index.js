import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import axios from 'axios';

import * as actionCreators from '../../actions/index.js';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
// import Messages from '../Messages';

class HomePage extends Component {
  state = {
    name: '',
    brand: '',
  };

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
    console.log('PARFYMER HÄR I HOME ' + this.props.parfumes);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.parfumes !== this.props.parfumes) {
      this.setState({ parfumes: this.props.parfumes });
    }
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  removeParfume = (e, id) => {
    // const removedFromState = this.state.parfumes.splice(
    //   e.target.index,
    //   1,
    // );
    // this.setState({ removedFromState });
    console.log('TEST ROW ' + id);
    // .post('http://localhost:4000/parfumes/add', {
    //   idx: action.parfume,
    // })

    axios
      .delete(
        `http://localhost:4000/parfumes/`,
        id,
        // { headers: { 'Content-Type': 'text/plain' } },
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    // axios
    //   .delete('http://localhost:4000/parfumes/', { sphinx_idx: id })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  // addParfume = () => {
  //   const { brand, name } = this.state;
  //   fetch(
  //     `http://localhost:4000/parfumes/add?brand=${brand}&name=${name}`,
  //   )
  //     .catch(err => console.error(err))
  //     .then(getParfumes());
  // };

  addParfume = () => {
    console.log('newAP reached');
    const { name } = this.state;
    this.props.addParfume(name);
    // axios
    //   .post('http://localhost:4000/parfumes/add', { idx: name })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  render() {
    const { parfumes } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        {parfumes
          ? parfumes.map((parfume, index) => (
              <div key={'div' + parfume.sphinx_idx + index}>
                <p key={'name' + parfume.sphinx_idx + index}>
                  {parfume.sphinx_idx}
                </p>
                <p key={'brand' + parfume.sphinx_idx + index}>
                  {parfume.updated_time}
                </p>
                <button
                  key={'button' + parfume.sphinx_idx + index}
                  onClick={e =>
                    this.removeParfume(e, parfume.sphinx_idx)
                  }
                >
                  Remove
                </button>
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
        {/* <input
          type="text"
          value={this.state.brand}
          placeholder="brand"
          onChange={e => this.setState({ brand: e.target.value })}
        /> */}
        <button onClick={this.addParfume}>KLICKA</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userState.users,
  parfumes: state.parfumesState.parfumes,
});

// const mapDispatchToProps = dispatch => ({
//   onSetUsers: users => dispatch({ type: 'USERS_SET', users }),
// });

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    actionCreators,
  ),
  withAuthorization(condition),
)(HomePage);
