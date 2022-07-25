import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorsPage from './components/author/AuthorsPage';
import BlogPage from './components/blog/BlogPage';
import HomePage from './components/home/HomePage';
import Layout from './components/layout';
import ScrollToTop from './components/shared/ScrollToTop';


function App() {
  return (
    <Layout>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorsPage />} />
        </Routes>
      </>
    </Layout>
  )
}

export default App;
