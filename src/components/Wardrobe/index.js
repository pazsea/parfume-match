import React, { Component } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import {
  QuizTitle,
  Wrapper,
  ParfumeDiv,
  ImageDiv,
  InnerImageDiv,
  RatingForm,
} from './styles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import StarRatingComponent from 'react-star-rating-component';

import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import parfume1 from '../../images/parfume1.jpg';
import 'react-tabs/style/react-tabs.css';

class WardrobePage extends Component {
  state = {
    rating: 1,
    isTruncated: false,
  };

  toggleTruncate = () => {
    this.setState(prevState => ({
      isTruncated: !prevState.isTruncated,
    }));
  };

  render() {
    const { isTruncated } = this.state;
    return (
      <div>
        <QuizTitle>
          <h1>Wardrobe</h1>
        </QuizTitle>
        <Wrapper>
          <ImageDiv>
            <img src={parfume1} />
          </ImageDiv>

          <ParfumeDiv>
            <Tabs>
              <TabList>
                <Tab>Parfume name</Tab>
                <Tab>My rating</Tab>
              </TabList>

              <TabPanel>
                <div>
                  <h2>Parfym 1</h2>
                  <Truncate
                    lines={isTruncated ? 0 : 15}
                    ellipsis={
                      <span>
                        ...{' '}
                        <a onClick={this.toggleTruncate}>
                          {' '}
                          Read more
                        </a>
                      </span>
                    }
                  >
                    The girls looked like tall, exotic grazing
                    animals, swaying gracefully and unconsciously with
                    the movement of the train, their high heels like
                    polished hooves against the gray metal of the
                    bright void beyond the chain link. Her cheekbones
                    flaring scarlet as Wizard’s Castle burned,
                    forehead drenched with azure when Munich fell to
                    the Tank War, mouth touched with hot gold as a
                    gliding cursor struck sparks from the banks of
                    every computer in the puppet place had been a
                    subunit of Freeside’s security system. The girls
                    looked like tall, exotic grazing animals, swaying
                    gracefully and unconsciously with the surgery, he
                    {/* <a onClick={this.toggleTruncate}> Read less</a> */}
                  </Truncate>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Rating</h2>
                <RatingForm onSubmit={this.handleSubmit}>
                  <label>
                    My feedback:
                    <br />
                    <input
                      type="textarea"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <input type="submit" value="Submit" />
                </RatingForm>
              </TabPanel>
            </Tabs>
          </ParfumeDiv>
        </Wrapper>
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
)(WardrobePage);
