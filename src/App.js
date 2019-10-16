import React from 'react';
import { Router } from '@reach/router';
import './styles/layout.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  state = {
    loggedInUser: 'jessjelly'
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Router primary={false}>
            <ArticlesList path="/articles" />
            <ArticlesList path="/articles/:topic" />
            <SingleArticle
              path="/articles/:topic/:article_id"
              loggedInUser={this.state.loggedInUser}
            />
            <ErrorPage default />
          </Router>
        </main>
        <Sidebar
          loggedInUser={this.state.loggedInUser}
          updateLoggedInUser={this.updateLoggedInUser}
        />
        <Footer />
      </div>
    );
  }

  updateLoggedInUser = username => {
    this.setState({ loggedInUser: username });
  };
}

export default App;
