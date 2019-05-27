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
import Loading from '../Loading';

import headerAvantgard from '../../images/headerAvantgard.jpg';
import headerClean from '../../images/headerClean.jpg';
import headerFemaleClassics from '../../images/headerFemaleClassics.jpg';
import headerForMen from '../../images/headerForMen.jpg';
import headerTrendingNow from '../../images/headerTrendingNow.jpg';
import headerWorkPlay from '../../images/headerWorkPlay.jpg';

class ProfilePage extends Component {
  state = {
    loading: false,
    progress: 0,
    editState: false,
    ownDesc: this.props.authUser.ownDesc || '',
  };

  changeEditState = () => {
    this.setState({ editState: true });
  };

  ownDescChange = e => {
    const text = e.target.value;
    this.setState({ ownDesc: text });
  };

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  sendOwnDescToDB = event => {
    const {
      firebase,
      authUser: { uid },
    } = this.props;
    event.preventDefault();

    firebase
      .user(uid)
      .update({ ownDesc: this.state.ownDesc })
      .then(this.setState({ editState: false }));
  };

  handleUpload = () => {
    const { image } = this.state;
    if (image) {
      const { firebase, authUser } = this.props;
      this.setState({ loading: true });
      const uploadTask = firebase
        .imageUser()
        .child(authUser.uid)
        .child(image.name)
        .put(image);
      uploadTask.on(
        'state_changed',
        snapshot => {
          // progress function ....

          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          this.setState({ progress });
        },
        error => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          firebase
            .imageUser()
            .child(authUser.uid)
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              console.log(url);

              firebase
                .user(authUser.uid)
                .child('profilePic')
                .set({ url: url })
                .then(this.setState({ loading: false, image: null }));
            });
        },
      );
    }
  };

  setRecColToSelected() {
    const { firebase, authUser } = this.props;
    const recommendedCol = Object.keys(authUser.recommendedCol);

    console.log('SHIIIT ' + recommendedCol);

    firebase.user(authUser.uid).update({
      selectedCol: {
        [recommendedCol]: true,
      },
    });
  }

  render() {
    const { authUser } = this.props;

    // FÖRSTA VILLKORET MAN HAR VARKEN REC ELLER SELECTED
    if (!authUser.recommendedCol && !authUser.selectedCol) {
      return (
        <Fragment>
          <s.NoCollectionWrapper>
            <s.TitleCenter>
              <h1>Starta ditt doft-quiz</h1>
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
                      <s.DescriptionBox
                        editState={this.state.editState}
                      >
                        <textarea
                          id="link"
                          rows="15"
                          cols="210"
                          value={this.state.ownDesc}
                          onChange={this.ownDescChange}
                          placeholder={
                            this.props.authUser.ownDesc ||
                            'Vad har du för doftprofil? Skriv gärna.'
                          }
                          readOnly={
                            this.state.editState ? false : true
                          }
                        />
                        <br />
                      </s.DescriptionBox>
                      <s.DescButtonDiv>
                        <s.EditButton
                          editState={this.state.editState}
                          onClick={this.changeEditState}
                        >
                          EDIT
                        </s.EditButton>
                        <s.RatingButton
                          onClick={e => this.sendOwnDescToDB(e)}
                        >
                          SAVE
                        </s.RatingButton>
                      </s.DescButtonDiv>
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
                        <div className="image-upload">
                          <label for="file-input">
                            {this.state.loading ? (
                              <Loading />
                            ) : (
                              <img
                                alt="user profile pic"
                                src={authUser.profilePic.url}
                              />
                            )}
                          </label>

                          <input
                            id="file-input"
                            type="file"
                            onChange={this.handleChange}
                          />
                        </div>
                      </s.ProfilePicture>
                      {this.state.image ? (
                        <s.QuizIntroButton>
                          <button onClick={this.handleUpload}>
                            UPLOAD PICTURE
                          </button>
                        </s.QuizIntroButton>
                      ) : null}
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
                  Prenumerera
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
                      <s.DescriptionBox
                        editState={this.state.editState}
                      >
                        <textarea
                          id="link"
                          rows="15"
                          cols="210"
                          value={this.state.ownDesc}
                          onChange={this.ownDescChange}
                          placeholder={
                            this.props.authUser.ownDesc ||
                            'Vad har du för doftprofil? Skriv gärna.'
                          }
                          readOnly={
                            this.state.editState ? false : true
                          }
                        />
                        <br />
                      </s.DescriptionBox>
                      <s.DescButtonDiv>
                        <s.EditButton
                          editState={this.state.editState}
                          onClick={this.changeEditState}
                        >
                          EDIT
                        </s.EditButton>
                        <s.RatingButton
                          onClick={e => this.sendOwnDescToDB(e)}
                        >
                          SAVE
                        </s.RatingButton>
                      </s.DescButtonDiv>
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
                        <div className="image-upload">
                          <label for="file-input">
                            {this.state.loading ? (
                              <Loading />
                            ) : (
                              <img
                                alt="user profile pic"
                                src={authUser.profilePic.url}
                              />
                            )}
                          </label>

                          <input
                            id="file-input"
                            type="file"
                            onChange={this.handleChange}
                          />
                        </div>
                      </s.ProfilePicture>
                      {this.state.image ? (
                        <s.QuizIntroButton>
                          <button onClick={this.handleUpload}>
                            UPLOAD PICTURE
                          </button>
                        </s.QuizIntroButton>
                      ) : null}
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
                Rekommenderad kollektion <i>{colHeader}</i>
              </h1>

              <s.ButtonWrapper>
                <Link id="link" to={ROUTES.WARDROBE}>
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
                      <s.DescriptionBox
                        editState={this.state.editState}
                      >
                        <textarea
                          id="link"
                          rows="15"
                          cols="210"
                          value={this.state.ownDesc}
                          onChange={this.ownDescChange}
                          placeholder={
                            this.props.authUser.ownDesc ||
                            'Vad har du för doft profil? Skriv gärna.'
                          }
                          readOnly={
                            this.state.editState ? false : true
                          }
                        />
                        <br />
                      </s.DescriptionBox>
                      <s.DescButtonDiv>
                        <s.EditButton
                          editState={this.state.editState}
                          onClick={this.changeEditState}
                        >
                          EDIT
                        </s.EditButton>
                        <s.RatingButton
                          onClick={e => this.sendOwnDescToDB(e)}
                        >
                          SAVE
                        </s.RatingButton>
                      </s.DescButtonDiv>
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
                        <div className="image-upload">
                          <label htmlFor="file-input">
                            {this.state.loading ? (
                              <Loading />
                            ) : (
                              <img
                                alt="user profile pic"
                                src={authUser.profilePic.url}
                              />
                            )}
                          </label>

                          <input
                            id="file-input"
                            type="file"
                            onChange={this.handleChange}
                          />
                        </div>
                      </s.ProfilePicture>
                      {this.state.image ? (
                        <s.QuizIntroButton>
                          <button onClick={this.handleUpload}>
                            UPLOAD PICTURE
                          </button>
                        </s.QuizIntroButton>
                      ) : null}
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
