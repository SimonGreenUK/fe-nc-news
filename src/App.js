import React from 'react';
import { Router } from '@reach/router';
import './styles/layout.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Router primary={false}>
          <ArticlesList path="/articles" />
          <ArticlesList path="/articles/:topic" />
          <SingleArticle path="/articles/:topic/:article_id" />
          <ErrorPage default />
        </Router>
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
