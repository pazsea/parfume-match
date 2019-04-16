import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import './styles.css';
import { Slider, SliderWrapper, Header } from './styles';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class RecommendationsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://cdn.shopify.com/s/files/1/1061/5242/products/WP-Collection-450x450_grande.png?v=1550738754',
        'https://cdn.shopify.com/s/files/1/1061/5242/products/TN-Collection-450x450_grande.png?v=1550738927',
        'https://cdn.shopify.com/s/files/1/1061/5242/products/FC-Collection-450x450_grande_9ca94448-a73f-414b-9ffb-9310381c3426_grande.png?v=1550738730',
        'https://cdn.shopify.com/s/files/1/1061/5242/products/C-Collection-450x450_grande_2c33a2b0-584c-4e87-b338-1c83ffcb3aec_grande.png?v=1550738715',
        'https://cdn.shopify.com/s/files/1/1061/5242/products/AG-Collection-450x450_grande_d8ac98a0-818a-4dda-a789-cfadeec9cad7_grande.jpeg?v=1550738697',
        'https://cdn.shopify.com/s/files/1/1061/5242/products/WP-Collection-450x450_grande.jpg?v=1550738768',
        'https://cdn.shopify.com/s/files/1/1061/5242/products/Sniph-case-bottle-8ml-450px_7c8db786-1e69-4b76-a906-5234c1e0e406_grande.jpg?v=1550738715',
      ],
      currentIndex: 0,
      translateValue: 0,
    };
  }
  goToPrevSlide = () => {
    console.log('Prevbutton clicked');
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 5,
        translateValue: -2500,
      });
    }
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  imageSelector = () => {
    return this.state.images.currentIndex;
  };
  render() {
    return (
      <Fragment>
        <Header>
          <p>Här är början till en Header</p>
        </Header>

        <Slider>
          <SliderWrapper
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s',
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </SliderWrapper>

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />

          <RightArrow goToNextSlide={this.goToNextSlide} />
        </Slider>
      </Fragment>
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
