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
  // TODO(paz): Fixa ordentliga handleChange och handleSubmit. Tänk "What would Robin do?"
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
    const removedFromState = this.state.parfumes.splice(
      e.target.index,
      1,
    );
    this.setState({ removedFromState });
    console.log('TEST ROW ' + id);
    this.props.deleteRow(id);
  };

  // addParfume = () => {
  //   const { brand, name } = this.state;
  //   fetch(
  //     `http://localhost:4000/parfumes/add?brand=${brand}&name=${name}`,
  //   )
  //     .catch(err => console.error(err))
  //     .then(getParfumes());
  // };

  newAddPerfume = () => {
    console.log('newAP reached');
    const { name } = this.state;
    axios
      .post('http://localhost:4000/parfumes/add', { idx: name }) //  ahh SÅkklart... får se ...way ahead of u dude ;) haha doesnt work though...tror vi måste fixa porten
      .then(function(response) {
        console.log(response);
      }) // men jag får bara node-js liveservern hos mig, inte react. men testa du istället Jag kan skcika den med. ett ögpnblik.
      //Nope.. doesnt work :S
      .catch(function(error) {
        console.log(error);
      });
    this.props.getParfumes();
  }; // ser det rätt ut? japp! förutsatt att name finns i state så, men d känns väl säkert. Jag tror det. Jag testar.
  render() {
    const { parfumes } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        {parfumes
          ? parfumes.slice(0, 5).map((parfume, index) => (
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
        <button onClick={this.newAddPerfume}>KLICKA</button>
      </div>
    );
  }
}
// kolla terminaloutput från node.js hehe alltså du måste posta en sak via sidan och sen kollanode.js får 500 Internal server error
// ehh? haha Ska jag posta i url? nä alltså ladda sidan, fyll i nåt i rutan, klicka på send
// jag har gjort det.. Det händer inget i database... exakt. för du får 500 internal server error. kolla terminalendär node.js körs
// Cannot destructure property `idx` of 'undefined' or 'null'.
// står det undefined oxo på nåt ställe? vi console.loggar ju body
// pasta hela terminaoutputen som en snippet på slack ahead of you :D

const mapStateToProps = state => ({
  users: state.userState.users,
  parfumes: state.getAllState.parfumes,
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
