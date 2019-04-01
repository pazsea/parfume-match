import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

import ImageGallery from 'react-image-gallery';

class WardrobePage extends React.Component {
  render() {
    const images = [
      {
        original: require('../../images/IMG_2143.JPG'),
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: require('../../images/IMG_2145.JPG'),
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
      },
      {
        original: require('../../images/IMG_2150.JPG'),
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
      },
    ];

    return <ImageGallery items={images} />;
  }
}

// class WardrobePage extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Wardrobe</h1>
//         <p>This is the Wardrobe</p>
//         <ImageGallery />
//       </div>
//     );
//   }
// }

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
)(WardrobePage);
