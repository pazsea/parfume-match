import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import * as s from './styles';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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

  setRecColToSelected() {
    const { firebase, authUser } = this.props;
    const recommendedCol = Object.keys(authUser.recommendedCol);

    console.log('SHIIIT ' + recommendedCol);

    firebase.user(authUser.uid).update({
      selectedCol: {
        [recommendedCol]: true,
      },
    });
    // console.log('SelectedCol ' + selectedCol);
  }
  // Användaren har ingen recommendedCol: Visa Quiz-knapp + text.
  // Användaren har endast recommendedCol: Visa Prenumerationsknapp + text.
  // Användaren har en selectedCol: "Allt" content visas

  render() {
    const { loading } = this.state;

    const { subscription, authUser } = this.props;

    // console.log(
    //   'recommendedCol ' + Object.keys(authUser.recommendedCol),
    // );

    // FÖRSTA VILLKORET MAN HAR VARKEN REC ELLER SELECTED
    if (!authUser.recommendedCol && !authUser.selectedCol) {
      return (
        <Fragment>
          <s.NoCollectionWrapper>
            <s.TitleCenter>
              <h1>Starta ditt doft-quiz nu</h1>
            </s.TitleCenter>
            <s.TextCenter>
              <p>
                Svårt att bestämma dig för vilken av våra kollektioner
                som passar dig? Ingen fara! Gör vårt Sniph quiz så
                kommer vi att kunna ge dig en bättre rekommendation.
                Du kan göra testet flera gånger och som medlem kan du
                byta kollektion när du vill.
              </p>
            </s.TextCenter>

            <s.QuizIntroButton>
              <button>
                <Link to={ROUTES.QUESTIONONE}>Starta doft-quiz</Link>
              </button>
            </s.QuizIntroButton>
          </s.NoCollectionWrapper>

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
                    <h2>{this.props.authUser.username}</h2>
                    <div>
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
                  </div>
                </s.ProfileContent>
              </s.FlexRightContainer>
            </s.FlexContainerRow>
          </s.FlexContainer>
        </Fragment>
      );

      // ANDRA VILLKORET MAN HAR RECOMMENDED
    } else if (authUser.recommendedCol && !authUser.selectedCol) {
      const colHeader = Object.keys(authUser.recommendedCol);
      // console.log(colHeader);
      return (
        <Fragment>
          <s.Header
            headerImage={
              colHeader.includes('FÖR MÄN: Aesthetic')
                ? headerForMen
                : colHeader.includes('Avant-Garde')
                ? headerAvantgard
                : colHeader.includes('Clean')
                ? headerClean
                : colHeader.includes('Female Classics')
                ? headerFemaleClassics
                : colHeader.includes('Trending Now')
                ? headerTrendingNow
                : colHeader.includes('FÖR MÄN: Work/Play')
                ? headerWorkPlay
                : null
            }
          >
            <s.TitleOnHeaderCenter>
              <h1>
                Rekommenderad kollektion <i>{colHeader}</i>
              </h1>

              <s.ButtonWrapper>
                <Link
                  id="link"
                  onClick={e => this.setRecColToSelected(e)}
                  to={ROUTES.WARDROBE}
                >
                  Prenumerera
                </Link>
              </s.ButtonWrapper>
            </s.TitleOnHeaderCenter>
          </s.Header>

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
                    <h2>{this.props.authUser.username}</h2>
                    <div>
                      <s.ProfilePicture>
                        <img
                          alt="profile pic"
                          src={profile_picture_placeholder}
                        />
                      </s.ProfilePicture>
                    </div>
                  </div>
                </s.ProfileContent>
              </s.FlexRightContainer>
            </s.FlexContainerRow>
          </s.FlexContainer>
        </Fragment>
      );
      // TREDJE OCH SISTA VILLKORET MAN HAR RECOMMENDED OCH SELECTED
    } else {
      const colHeader = Object.keys(authUser.selectedCol);

      return (
        <Fragment>
          <s.Header
            headerImage={
              colHeader.includes('FÖR MÄN: Aesthetic')
                ? headerForMen
                : colHeader.includes('Avant-Garde')
                ? headerAvantgard
                : colHeader.includes('Clean')
                ? headerClean
                : colHeader.includes('Female Classics')
                ? headerFemaleClassics
                : colHeader.includes('Trending Now')
                ? headerTrendingNow
                : colHeader.includes('FÖR MÄN: Work/Play')
                ? headerWorkPlay
                : null
            }
          >
            <s.TitleOnHeaderCenter>
              <h1>
                Nuvarande kollektion <i>{colHeader}</i>
              </h1>

              <s.ButtonWrapper>
                <Link
                  id="link"
                  onClick={e => this.setRecColToSelected(e)}
                  to={ROUTES.WARDROBE}
                >
                  Visa doftgarderob
                </Link>
              </s.ButtonWrapper>
            </s.TitleOnHeaderCenter>
          </s.Header>

          <s.FlexContainer>
            <s.FlexContainerRow>
              <s.FlexLeftContainer>
                <Tabs>
                  <TabList>
                    <Tab>Sniph Blogg</Tab>
                    <Tab>Min beskrivning</Tab>
                  </TabList>
                  <TabPanel>
                    <s.Blog>
                      <h2>Senaste bloginlägg</h2>
                      <p>
                        <i>2019-05-19</i>
                        <br />
                        Mors dag är här innan du hinner blinka! Se
                        till att du är redo att överraska de
                        viktigaste mammorna i ditt liv med en speciell
                        gåva. Med Sniph kommer din rara mor att få
                        upptäcka olika dofter utvalda av experter, en
                        present som kommer överraska långt bortom mors
                        dag. Scrolla ner för att läsa mer om varför
                        Sniph är en alldeles unik gåva, och skäm bort
                        din mamma med någon av våra härliga gåvotips.
                        {'   '}
                        <a href="url">Läs mer</a>
                      </p>
                    </s.Blog>
                  </TabPanel>
                  <TabPanel>
                    <s.Blog>
                      <h2>Min beskrivning</h2>
                      <s.DescriptionBox>
                        <textarea id="link" rows="15" cols="200" />
                        <br />
                      </s.DescriptionBox>
                      <s.ButtonWrapper>
                        <Link
                          id="input"
                          onClick={e => this.setRecColToSelected(e)}
                          to={ROUTES.PROFILE}
                        >
                          Spara
                        </Link>
                      </s.ButtonWrapper>
                    </s.Blog>
                  </TabPanel>
                </Tabs>
              </s.FlexLeftContainer>
              <s.FlexRightContainer>
                <s.ProfileContent>
                  <div>
                    <h2>{this.props.authUser.username}</h2>
                    <div>
                      <s.ProfilePicture>
                        <img
                          alt="profile pic"
                          src={profile_picture_placeholder}
                        />
                      </s.ProfilePicture>
                    </div>
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
