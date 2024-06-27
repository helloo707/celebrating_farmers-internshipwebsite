import { useState,useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/service";
import Products from "./pages/Products";
import Blog from './pages/BlogPage';
import BlogForm from './components/BlogForm';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Example: Fetch blogs from your API
    axios.get('http://localhost:3000/api/blogs')
      .then((response) => {
        setBlogs(response.data); // Assuming your API returns an array of blogs
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);
  
  const handleAddBlog = (formData) => {
    axios.post('http://localhost:3000/api/blogs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => setBlogs([...blogs, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog blogs={blogs}/>} />
        <Route path="/blog-create" element={<BlogForm onSubmit={handleAddBlog} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
