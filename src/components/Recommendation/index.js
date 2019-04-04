import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

import ImageGallery from 'react-image-gallery';

class RecommendationsPage extends React.Component {
  render() {
    const images = [
      {
        original: require('../../images/collectionWithTextClean.png'),
        thumbnail: require('../../images/collectionWithTextClean.png'),
      },
      {
        original: require('../../images/collectionWithTextFemaleClassics.png'),
        thumbnail: require('../../images/collectionWithTextFemaleClassics.png'),
      },
      {
        original: require('../../images/collectionWithTextTrendingNow.png'),
        thumbnail: require('../../images/collectionWithTextTrendingNow.png'),
      },
      {
        original: require('../../images/collectionWithTextWorkPlay.jpg'),
        thumbnail: require('../../images/collectionWithTextWorkPlay.jpg'),
      },
      {
        original: require('../../images/collectionWithTextAvantgarde.jpg'),
        thumbnail: require('../../images/collectionWithTextAvantgarde.jpg'),
      },
      {
        original: require('../../images/collectionWithTextAesthetic.png'),
        thumbnail: require('../../images/collectionWithTextAesthetic.png'),
      },
    ];

    return <ImageGallery items={images} />;
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
