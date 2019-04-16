import React, { Component, Fragment } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import './styles.css';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Collection from './Collection.js';

//Bilder
import collectionWithTextAesthetic from '../../images/collectionWithTextAesthetic.png';
import collectionWithTextAvantgarde from '../../images/collectionWithTextAvantgarde.jpg';
import collectionWithTextClean from '../../images/collectionWithTextClean.png';
import collectionWithTextFemaleClassics from '../../images/collectionWithTextFemaleClassics.png';
import collectionWithTextTrendingNow from '../../images/collectionWithTextTrendingNow.png';
import collectionWithTextWorkPlay from '../../images/collectionWithTextWorkPlay.jpg';
import genericParfumeBottle from '../../images/genericParfumeBottle.jpg';
import headerForMen from '../../images/headerForMen.jpg';
import headerAvantGarde from '../../images/headerAvantgard.jpg';
import headerClean from '../../images/headerClean.jpg';
import headerFemaleClassics from '../../images/headerFemaleClassics.jpg';
import headerTrendingNow from '../../images/headerTrendingNow.jpg';
import headerWorkPlay from '../../images/headerWorkPlay.jpg';
//Text
import {
  textAesthetic,
  textAvantGarde,
  textClean,
  textFemaleClassics,
  textTrendingNow,
  textWorkPlay,
} from './descriptions.js';

class RecommendationsPage extends Component {
  state = {
    //Mockup logik. Förberedelse för Firebase.
    aesthetic: {
      image: collectionWithTextAesthetic,
      headerImage: headerForMen,
      title: 'FÖR MÄN: AESTHETIC',
      description: textAesthetic,
    },
    avantGarde: {
      image: collectionWithTextAvantgarde,
      headerImage: headerAvantGarde,
      title: 'AVANT-GARDE',
      description: textAvantGarde,
    },
    clean: {
      image: collectionWithTextClean,
      headerImage: headerClean,
      title: 'CLEAN',
      description: textClean,
    },
    femaleClassics: {
      image: collectionWithTextFemaleClassics,
      headerImage: headerFemaleClassics,
      title: 'FEMALE CLASSICS',
      description: textFemaleClassics,
    },
    trendingNow: {
      image: collectionWithTextTrendingNow,
      headerImage: headerTrendingNow,
      title: 'TRENDING NOW',
      description: textTrendingNow,
    },
    workPlay: {
      image: collectionWithTextWorkPlay,
      headerImage: headerWorkPlay,
      title: 'FÖR MÄN: WORK/PLAY',
      description: textWorkPlay,
    },
  };

  render() {
    var userCollection = 'trendingNow';

    return (
      <div>
        <Collection colSuggested={this.state[userCollection]} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userState.users,
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
