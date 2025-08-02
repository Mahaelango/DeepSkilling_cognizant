import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState("books");

  // Method 1: Using if
  let content;
  if (selected === "books") {
    content = <BookDetails />;
  } else if (selected === "blogs") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📘 Blogger App</h1>

      {/* Dropdown to select component */}
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="books">Book Details</option>
        <option value="blogs">Blog Details</option>
        <option value="courses">Course Details</option>
      </select>

      <br /><br />

      {/* Method 1: using element variable */}
      {content}

      <br /><hr /><br />

      {/* Method 2: inline ternary rendering */}
      <h3>Preview Below (Ternary Method)</h3>
      {selected === "books" ? (
        <BookDetails />
      ) : selected === "blogs" ? (
        <BlogDetails />
      ) : (
        <CourseDetails />
      )}

      <br /><hr /><br />

      {/* Method 3: short-circuit rendering */}
      <h3>Preview Below (Short-Circuit)</h3>
      {selected === "books" && <BookDetails />}
      {selected === "blogs" && <BlogDetails />}
      {selected === "courses" && <CourseDetails />}
    </div>
  );
}

export default App;
