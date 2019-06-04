import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import './styles.css';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Collection from './Collection.js';

//Bilder
import collectionForMen from '../../images/collectionForMen.jpg';
import collectionAvantgarde from '../../images/collectionAvantgarde.jpg';
import collectionClean from '../../images/collectionClean.jpg';
import collectionFemaleClassics from '../../images/collectionFemaleClassics.jpg';
import collectionTrendingNow from '../../images/collectionTrendingNow.jpg';
import collectionWorkPlay from '../../images/collectionWorkPlay.jpg';
import headerForMen from '../../images/headerForMen.jpg';
import headerAvantGarde from '../../images/headerAvantgard.jpg';
import headerClean from '../../images/headerClean.jpg';
import headerFemaleClassics from '../../images/headerFemaleClassics.jpg';
import headerTrendingNow from '../../images/headerTrendingNow.jpg';
import headerWorkPlay from '../../images/headerWorkPlay.jpg';
//Text
import * as DESC from './descriptions.js';

class RecommendationsPage extends Component {
  state = {
    //Mockup logik. Förberedelse för Firebase.
    'FÖR MÄN: Aesthetic': {
      image: collectionForMen,
      headerImage: headerForMen,
      title: 'FÖR MÄN: AESTHETIC',
      firstDescription: DESC.firstTextAesthetic,
      secondDescription: DESC.secondTextAesthetic,
    },
    'Avant-Garde': {
      image: collectionAvantgarde,
      headerImage: headerAvantGarde,
      title: 'AVANT-GARDE',
      firstDescription: DESC.firstTextAvantGarde,
      secondDescription: DESC.secondTextAvantGarde,
    },
    Clean: {
      image: collectionClean,
      headerImage: headerClean,
      title: 'CLEAN',
      firstDescription: DESC.firstTextClean,
      secondDescription: DESC.secondTextClean,
    },
    'Female Classics': {
      image: collectionFemaleClassics,
      headerImage: headerFemaleClassics,
      title: 'FEMALE CLASSICS',
      firstDescription: DESC.firstTextFemaleClassics,
      secondDescription: DESC.secondTextFemaleClassics,
    },
    'Trending Now': {
      image: collectionTrendingNow,
      headerImage: headerTrendingNow,
      title: 'TRENDING NOW',
      firstDescription: DESC.firstTextTrendingNow,
      secondDescription: DESC.secondTextTrendingNow,
    },
    'FÖR MÄN: Work/Play': {
      image: collectionWorkPlay,
      headerImage: headerWorkPlay,
      title: 'FÖR MÄN: WORK/PLAY',
      firstDescription: DESC.firstTextWorkPlay,
      secondDescription: DESC.secondTextWorkPlay,
    },
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  randomKey = () => {
    const keys = Object.keys(this.state);
    return keys[this.getRandomInt(6)];
  };

  render() {
    return (
      <div>
        <Collection {...this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userState.users,
  authUser: state.sessionState.authUser,
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
)(RecommendationsPage);
