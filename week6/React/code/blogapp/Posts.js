import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // Fetch posts from API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => this.setState({ posts: data }))
      .catch((error) => this.setState({ error }));
  }

  // Called once component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary lifecycle hook
  componentDidCatch(error, info) {
    alert("An error occurred while loading posts: " + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p style={{ color: 'red' }}>Error: {error.message}</p>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h2>Blog Posts</h2>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
