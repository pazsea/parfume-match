import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import * as s from './styles';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import profile_picture_placeholder from '../../images/profile_picture_placeholder.jpg';
import headerAvantgard from '../../images/headerAvantgard.jpg';
import headerClean from '../../images/headerClean.jpg';
import headerFemaleClassics from '../../images/headerFemaleClassics.jpg';
import headerForMen from '../../images/headerForMen.jpg';
import headerTrendingNow from '../../images/headerTrendingNow.jpg';
import headerWorkPlay from '../../images/headerWorkPlay.jpg';

class ProfilePage extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {}

  componentWillMount() {
    this.props.firebase.users().off();
  }

  // Användaren har ingen recommendedCol: Visa Quiz-knapp + text.
  // Användaren har endast recommendedCol: Visa Prenumerationsknapp + text.
  // Användaren har en selectedCol: "Allt" content visas

  render() {
    const { loading } = this.state;
    const {
      subscription,
      authUser,
      recommendedCol,
      selectedCol,
    } = this.props;
    console.log('recommendedCol ' + recommendedCol);
    console.log('suggestedCol ' + selectedCol);

    if (loading) {
      return <p>Loading...</p>;
    } else if (!recommendedCol || selectedCol) {
      // else if (!subscription) {
      return (
        <Fragment>
          <s.TitleCenter>
            <h1>Starta ditt doft-quiz nu</h1>
          </s.TitleCenter>
          <s.QuizIntroButton>
            <button>
              <Link to={ROUTES.QUESTIONONE}>Starta doft-quiz</Link>
            </button>
          </s.QuizIntroButton>
        </Fragment>
      );
    } else if (!recommendedCol) {
      return (
        <Fragment>
          <s.TitleCenter>
            <h1>Prenumerera</h1>
          </s.TitleCenter>

          <s.SubscribeButton>
            <button onClick={() => this.setRecColToSelected()}>
              <Link to={ROUTES.WARDROBE}>Prenumerera</Link>
            </button>
          </s.SubscribeButton>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <s.Header headerImage={headerAvantgard} />

          <s.FlexContainer>
            <s.FlexContainerRow>
              <s.FlexLeftContainer>
                <s.Blog>
                  <h2>Senaste bloginlägg</h2>
                  <p>
                    <i>2019-05-19</i>
                    <br />
                    Mors dag är här innan du hinner blinka! Se till
                    att du är redo att överraska de viktigaste
                    mammorna i ditt liv med en speciell gåva. Med
                    Sniph kommer din rara mor att få upptäcka olika
                    dofter utvalda av experter, en present som kommer
                    överraska långt bortom mors dag. Scrolla ner för
                    att läsa mer om varför Sniph är en alldeles unik
                    gåva, och skäm bort din mamma med någon av våra
                    härliga gåvotips.{'   '}
                    <a href="url">Läs mer</a>
                  </p>
                </s.Blog>
                <h2>Min beskrivning</h2>
                <textarea />
                <br />
                <button>Spara</button>
              </s.FlexLeftContainer>
              <s.FlexRightContainer>
                <s.ProfileContent>
                  <div>
                    <h1>Profil</h1>
                    <div>
                      <h2>{this.props.authUser.username}</h2>
                      <s.ProfilePicture>
                        <img
                          alt="profile pic"
                          src={profile_picture_placeholder}
                        />
                      </s.ProfilePicture>
                      {/* Namnet på Användaren 
            Bild på användaren, hårdkoda så länge.
            bakgrunder vara aktiv kollektion knapp till
            wardrobe/rekommenderad kollektion knapp till
            recommendation/ placeholder med quizknappen 
            textarea för beskrivning*/}
                    </div>

                    <s.QuizIntroButton>
                      <button>
                        <Link to={ROUTES.QUESTIONONE}>
                          Starta doft-quiz
                        </Link>
                      </button>
                    </s.QuizIntroButton>
                  </div>
                </s.ProfileContent>
              </s.FlexRightContainer>
            </s.FlexContainerRow>
          </s.FlexContainer>
        </Fragment>
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
