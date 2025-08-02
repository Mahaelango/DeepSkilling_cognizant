import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: "React Tips", author: "React Dev" },
    { id: 2, title: "Understanding useEffect", author: "Hook Master" },
    { id: 3, title: "JSX Simplified", author: "Frontend Guy" }
  ];

  return (
    <div>
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
