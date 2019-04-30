import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import * as actionCreators from '../../actions/index.js';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
// import Messages from '../Messages';

class HomePage extends Component {
  state = {
    name: '',
    brand: '',
    content: '',
  };

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.parfumes !== this.props.parfumes) {
      this.setState({ parfumes: this.props.parfumes });
    }
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  removeParfume = (e, sphinx_idx) => {
    this.props.deleteParfume(sphinx_idx);
  };

  changeParfume = (event, sphinx_idx, ind) => {
    const updatedParfumeContent = this.state[sphinx_idx + ind];
    this.props.updateParfume(sphinx_idx, updatedParfumeContent);
  };

  addParfume = () => {
    const { content } = this.state;
    this.props.addParfume(content);
  };

  render() {
    const { parfumes } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {parfumes
          ? parfumes.slice(0, 5).map((parfume, index) => (
              <Fragment key={'fragment' + parfume.sphinx_idx + index}>
                <p key={'brand' + parfume.sphinx_idx + index}>
                  {parfume.updated_time}
                </p>
                <input
                  type="text"
                  key={'input' + parfume.sphinx_idx + index}
                  value={
                    this.state[parfume.sphinx_idx + index]
                      ? this.state[parfume.sphinx_idx + index]
                      : parfume.sphinx_idx
                  }
                  onChange={e =>
                    this.setState({
                      [parfume.sphinx_idx + index]: e.target.value,
                    })
                  }
                />

                <button
                  disabled={
                    this.state[parfume.sphinx_idx + index]
                      ? false
                      : true
                  }
                  key={'buttonUpdate' + parfume.sphinx_idx + index}
                  onClick={event =>
                    this.changeParfume(
                      event,
                      parfume.sphinx_idx,
                      index,
                    )
                  }
                >
                  CHANGE PARFUME
                </button>
                <button
                  key={'button' + parfume.sphinx_idx + index}
                  onClick={e =>
                    this.removeParfume(e, parfume.sphinx_idx)
                  }
                >
                  REMOVE parfume
                </button>
              </Fragment>
            ))
          : null}

        <input
          type="text"
          value={this.state.content}
          placeholder="name"
          onChange={e => this.setState({ content: e.target.value })}
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

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    actionCreators,
  ),
  withAuthorization(condition),
)(HomePage);
