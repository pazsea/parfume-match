import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getReadablePosts } from '../selectors/crud';
import { doFetchCrud } from '../actions/crud';

import Post from './Post'
import Modal from './Modal'
import Details from './Details'


import './List.css'

class List extends Component {

    state = {
        showModal : false,
        postClicked : {},
        idClicked : null,
    }
    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
        this.setState({ postClicked: {} })
    }
    setIdClicked = (id) => {
        this.setState({idClicked: id})        
    }
    setPostClicked = (id, posts) => {
      const listObject = id ? posts.find(post => post.id === id) : {}
      this.setState({postClicked: listObject, idClicked: id})        
    }
    onNewPost = () => {
      this.setState({postClicked: {}, idClicked : null})
    }
    onSubmit = (event) => {
      
      event.preventDefault();
      this.props.reRenderKey()
      console.log('stäng modal')
      this.toggleModal()
      
    }
    onNewOrUpdatePost = () => {
      const post=this.state.postClicked
      post ? this.props.onUpdate(post) : this.props.onNew()
    }
    onDeletePost = () => {
      const id=this.state.idClicked
      this.props.onDelete(id)
    }
    inputChange = (event) => {
      console.log(event.target.name)
      this.setState({[event.target.name] : event.target.value})
    }
    componentDidMount () {
        this.props.onFetchCrud()
    }

    render () {
        const posts = this.props.posts
        
        return (
            
            <div className="list">
            <ListHeader columns={COLUMNS} />
            {(posts || []).map(post =>
                <Post
                    key={post.id}
                    post={post}
                    columns={COLUMNS}
                    toggleModal={this.toggleModal}
                    IdClicked={id => this.setPostClicked(id, this.props.posts)}                    
                />
            )}
            <button onClick={()=> {this.toggleModal(); this.onNewPost()}} >Skapa ny</button>
            <Modal show={this.state.showModal} modalClosed={this.toggleModal}>
                <Details 
                  
                  post={this.state.postClicked} 
                  onNewOrUpdatePost={this.onNewOrUpdatePost} 
                  onDeletePost={this.onDeletePost}  
                  onSubmit={(event)=>this.onSubmit(event)}
                  inputChange={(event)=>this.inputChange(event)}

                  key={this.state.postClicked.id} //tvingar en uppdatering av komponenten. Vilket leder till att state får nya props
                />
            </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: getReadablePosts(state),
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onFetchCrud: () => dispatch(doFetchCrud()),
    
    });
  
export default connect(
    mapStateToProps,
    mapDispatchToProps    
  )(List);


  const ListHeader = ({ columns }) =>
  <div className="list-header">
    {Object.keys(columns).map(key =>
      <span
        key={key}
        style={{ width: columns[key].width }}
      >
        {columns[key].label}
      </span>
    )}
  </div>

const COLUMNS = {
    title: {
      label: 'Task',
      width: '40%',
    },
    author: {
      label: 'Created',
      width: '30%',
    },
    comments: {
      label: 'Status',
      width: '10%',
    },
    points: {
      label: '',
      width: '10%',
    },
    archive: {
      width: '10%',
    },
  };