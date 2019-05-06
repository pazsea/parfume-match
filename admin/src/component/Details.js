
import React, { Component } from 'react'

import { connect } from 'react-redux';


import { doUpdateCrud, doNewCrud, doDeleteCrud } from '../actions/crud';

class Details extends Component {

  state= {
      id: this.props.post.id,
      task: this.props.post.task,
      status: this.props.post.status,
      created_at: this.props.post.created_at,
  }
  inputChange = (event) => {
    //console.log(event.target.value)
    this.setState({[event.target.name] : event.target.value})
  }
  onNewOrUpdatePost = () => {
    const post=this.state
    post.id ? this.props.onUpdate(post) : this.props.onNew(post)
  }
  onDeletePost = () => {
    const id=this.state.id
    this.props.onDelete(id)
  }
  render() {
    return(
            <form onSubmit={this.props.onSubmit}>
                <input type="text" onChange={this.inputChange} name="task" value={this.state.task || ''} /><br/>
                <input type="text" onChange={this.inputChange}  name="created_at" value={this.state.created_at || ''}/><br/>
                <input type="text" onChange={this.inputChange}  name="status" value={this.state.status || ''}/><br/>               
                <input type="text" onChange={this.inputChange}  name="id" value={this.state.id || ''}/><br/>               
                <button onClick={this.onNewOrUpdatePost}>Spara</button>
                {this.state.id && <button onClick={this.onDeletePost}>Ta bort</button>}
            </form>
    )
  }
}

// const mapStateToProps = state => ({
//   posts: getReadablePosts(state),
// });
const mapDispatchToProps = (dispatch) => ({
    onNew: (post) => dispatch(doNewCrud(post)),
    onUpdate: (post) => dispatch(doUpdateCrud(post)),
    onDelete: (id) => dispatch(doDeleteCrud(id)),
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Details);
