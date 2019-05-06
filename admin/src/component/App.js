import React, { Component } from 'react';
import List from './List';


class App extends Component {

  state = {
    keyforRerender: 1
  }

  getNewKey = () => {
    
    
    this.setState({ keyforRerender: Math.random() });
  }

  render () {
    return (
      <div className="App">
        <List key={this.state.keyforRerender} reRenderKey={this.getNewKey} />
      </div>
    );
  }
}

export default App;
