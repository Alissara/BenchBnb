import React from 'react';
import { withRouter } from 'react-router-dom';

class BenchIndexItem extends React.Component {
  render() {
    const { description, picture_url } = this.props.bench;
    return (
      <div>
        <span>Description: </span>
        <span>{description}</span>
        <img src={picture_url} />
      </div>
    );
  }
}

export default BenchIndexItem;
