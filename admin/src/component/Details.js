import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getReadableNotes } from '../selectors/notes';

import Select from './Select';

import {
  doUpdateCrud,
  doNewCrud,
  doDeleteCrud,
} from '../actions/crud';

const setNoteName = (id, arr) => {
  const noteObject = arr && arr.find(obj => obj.id === id);
  const noteName = noteObject ? noteObject.name : '';

  return noteName;
};

class Details extends Component {
  //const { name, item_id, brand, col_name } = post;
  state = {
    item_id: this.props.post.item_id,
    name: this.props.post.name,
    brand: this.props.post.brand,
    man_address: this.props.post.man_address,
    top_note_id: this.props.post.top_note_id,
    heart_note_id: this.props.post.heart_note_id,
    base_note_id: this.props.post.base_note_id,
  };
  inputChange = event => {
    //console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };
  onNewOrUpdatePost = () => {
    const post = this.state;
    post.item_id ? this.props.onUpdate(post) : this.props.onNew(post);
  };
  onDeletePost = () => {
    const id = this.state.item_id;
    this.props.onDelete(id);
  };
  handleInput = event => {
    alert('input ' + event.target.value);
  };

  render() {
    const topNote = setNoteName(
      this.state.topNoteId,
      this.props.notes.parfumes,
    );
    const heartNote = setNoteName(
      this.state.heartNoteId,
      this.props.notes.parfumes,
    );
    const baseNote = setNoteName(
      this.state.baseNoteId,
      this.props.notes.parfumes,
    );

    return (
      <form onSubmit={this.props.onSubmit}>
        <div />
        <input
          type="text"
          onChange={this.inputChange}
          name="item_id"
          value={this.state.item_id || ''}
        />
        <br />
        <input
          type="text"
          onChange={this.inputChange}
          name="name"
          value={this.state.name || ''}
        />
        <br />
        <input
          type="text"
          onChange={this.inputChange}
          name="brand"
          value={this.state.brand || ''}
        />
        <br />
        <input
          type="text"
          onChange={this.inputChange}
          name="man_address"
          value={this.state.man_address || ''}
        />
        <br />
        <Select
          title={'Top note'}
          name={'top_note_id'}
          options={this.props.notes.parfumes}
          value={this.state.top_note_id}
          placeholder={'Select note'}
          handleChange={this.inputChange}
        />
        <Select
          title={'Heart note'}
          name={'heart_note_id'}
          options={this.props.notes.parfumes}
          value={this.state.heart_note_id}
          placeholder={'Select note'}
          handleChange={this.inputChange}
        />
        <Select
          title={'Base note'}
          name={'base_note_id'}
          options={this.props.notes.parfumes}
          value={this.state.base_note_id}
          placeholder={'Select note'}
          handleChange={this.inputChange}
        />

        <button onClick={this.onNewOrUpdatePost}>Spara</button>
        {this.state.item_id && (
          <button onClick={this.onDeletePost}>Ta bort</button>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  notes: getReadableNotes(state),
});
const mapDispatchToProps = dispatch => ({
  onNew: post => dispatch(doNewCrud(post)),
  onUpdate: post => dispatch(doUpdateCrud(post)),
  onDelete: id => dispatch(doDeleteCrud(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
