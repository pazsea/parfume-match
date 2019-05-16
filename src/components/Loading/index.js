import React, { Component } from 'react';
import { GooSpinner } from 'react-spinners-kit';
import { LoadingDiv, Middle } from './styles';

// https://github.com/dmitrymorozoff/react-spinners-kit

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <LoadingDiv>
        <Middle>
          <GooSpinner size={30} color="#000" loading={loading} />
        </Middle>
        <Middle>
          <p>Loading...</p>
        </Middle>
      </LoadingDiv>
    );
  }
}

export default Loading;
