import React, { Component } from 'react'
import Modal from './Modal'



import './List.css'

class List extends Component {

    state = {
        

        id: null,
        task: 'test',
        status: '',
        created_at: '',
        
    }
    onSubmit = (event) => {
      event.preventDefault();
      alert('submit')
    }
    inputChange = (event) => {
      console.log(event.target.name)
      this.setState({[event.target.name] : event.target.value})
    }
    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
        this.setState({ postClicked: {} })
    }

    render () {
        
        
        return (
            
            <div>
            <button onClick={()=> {this.toggleModal()}} >Skapa ny</button>
            
            <Modal show={this.state.showModal} modalClosed={this.toggleModal}>
            
                <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.inputChange} name="task" value={this.state.task} /><br/>
                <input type="text" onChange={this.inputChange}  name="created_at" value={this.state.created_at || ''}/><br/>
                <input type="text" onChange={this.inputChange}  name="status" value={this.state.status || ''}/><br/>               
                <input type="text" onChange={this.inputChange}  name="id" value={this.state.id || ''}/><br/>               
                <button onClick={this.props.onNewOrUpdatePost}>Spara</button>
                <button onClick={this.props.onDeletePost}>Ta bort</button>
                </form>
            </Modal>
            </div>
        )
    }
}

  
export default List;

