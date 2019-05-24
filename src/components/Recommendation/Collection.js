import React, { Component, Fragment } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as a from '../../constants/actionTypes';

import './styles.css';
import {
  Header,
  FlexContainer,
  ImageFlexContainer,
  TextFlexContainer,
  Description,
  SubscribeButton,
} from './styles';
import { Section } from '../../styleConstants/section.js';
import genericParfumeBottle from '../../images/genericParfumeBottle.jpg';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Loading from '../Loading';

class Collection extends Component {
  state = {
    // loading: true,
  };

  componentDidMount() {
    const {
      firebase,
      onSetAuthUser,
      authUser: { uid },
    } = this.props;
    firebase.user(uid).on('value', snapshot => {
      const aUser = Object.assign({}, snapshot.val(), { uid });
      onSetAuthUser(aUser);
    });
  }

  setRecColToSelected(e) {
    const { firebase, authUser } = this.props;
    // const { recommendedCol } = this.state;
    console.log(authUser.recommendedCol);
    firebase.user(authUser.uid).update({
      selectedCol: {
        [Object.keys(authUser.recommendedCol)]: true,
      },
    });
  }

  render() {
    // const { loading, recommendedCol } = this.state;
    const { authUser } = this.props;

    // if (users) {
    //   return <div>LADDAR...</div>;
    // }
    if (!authUser.recommendedCol) {
      return (
        <Section>
          <h2>Du har ingen rekommenderad kollektion....</h2>
          {/* // Lägg till felhantering (en knapp till Quizet) */}
        </Section>
      );
    } else {
      const {
        image,
        headerImage,
        title,
        firstDescription,
      } = this.props[Object.keys(this.props.authUser.recommendedCol)];
      return (
        <div>
          <Header headerImage={headerImage} />

          <FlexContainer>
            <ImageFlexContainer>
              <img src={image} alt="" />
              <img src={genericParfumeBottle} alt="" />
            </ImageFlexContainer>
            <TextFlexContainer>
              <h1>{title}</h1>
              <h2>159 KR/MÅNAD</h2>

              <SubscribeButton>
                <button onClick={e => this.setRecColToSelected(e)}>
                  <Link to={ROUTES.WARDROBE}>Prenumerera</Link>
                </button>
              </SubscribeButton>

              <Description>
                {firstDescription.split('/n').map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                <ul>
                  <li>Ny doft varje månad</li>
                  <li>Smart etui att ta med</li>
                  <li>Dofter utvalda av experter</li>
                  <li>Byt eller pausa när du vill</li>
                  <li>Ingen bindningstid</li>
                  <li>Fri frakt</li>
                </ul>
                <br />
                <br />
                <p>
                  <i>
                    <b>Sniph</b> är en prenumerationstjänst som gör
                    det enkelt att upptäcka nya dofter. Vi skickar dig
                    varje månad mindre flaskor med kända parfymer, som
                    du använder i vårt smarta etui. Prenumerationen
                    kostar 159 kr/mån utan bindningstid.
                  </i>
                </p>
              </Description>
            </TextFlexContainer>
          </FlexContainer>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  users: state.userState,
  authUser: state.sessionState.authUser,
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users }),

  onSetAuthUser: authUser =>
    dispatch({ type: a.AUTH_USER_SET, authUser }),
  // onSetWardrobe: wardrobe =>
  //   dispatch({ type: a.WARDROBE_USER_SET, wardrobe }),
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthorization(condition),
)(Collection);
