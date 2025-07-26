import React from 'react';

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '15px' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
