import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { QuizIntroButton } from './styles.js';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { profile_picture_placeholder } from '../../images/profile_picture_placeholder.jpg';

class ProfilePage extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {}
  componentWillMount() {
    this.props.firebase.users().off();
  }

  // Användaren har ingen rekommenderad kollektion: Visa Quiz-knapp
  // Användaren har en vald kollektion: selectedCol visas.
  // Användaren har endast en recommended: Visa recommendedCol.

  render() {
    const { subscription, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    } else if (!subscription) {
      return (
        <div>
          <h1>Profil</h1>
          <div>
            <h2>{this.props.authUser.username}</h2>
            <img
              alt="profile pic"
              src={profile_picture_placeholder}
            />
            {/* Namnet på Användaren 
            Bild på användaren, hårdkoda så länge.
            backgrunder vara aktiv kollektion knapp till
            wardrobe/rekommenderad kollektion knapp till
            recommendation/ placeholder med quizknappen */}
          </div>

          <QuizIntroButton>
            <button>
              <Link to={ROUTES.QUESTIONONE}>Starta doft-quiz</Link>
            </button>
          </QuizIntroButton>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

// As the second argument passed in to connect,
// mapDispatchToProps is used for dispatching actions to the store.

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
)(ProfilePage);
