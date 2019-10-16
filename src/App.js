import React from 'react';
import { Router } from '@reach/router';
import './styles/layout.css';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import ChangeUser from './components/ChangeUser';
import MobileNav from './components/MobileNav';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  state = {
    loggedInUser: {
      username: 'jessjelly',
      avatar_url:
        'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
      name: 'Jess Jelly'
    },
    mobileNavOpen: false
  };
  render() {
    return (
      <div className="App">
        <Header
          loggedInUser={this.state.loggedInUser}
          toggleMobileNav={this.toggleMobileNav}
        />
        <main className="main">
          <Router primary={false}>
            <ArticlesList path="/articles" />
            <ArticlesList path="/articles/:topic" />
            <SingleArticle
              path="/articles/:topic/:article_id"
              loggedInUser={this.state.loggedInUser}
            />
            <ChangeUser
              path="/change-user"
              loggedInUser={this.state.loggedInUser}
              updateLoggedInUser={this.updateLoggedInUser}
            />
            <ErrorPage default />
          </Router>
        </main>
        <MobileNav mobileNavOpen={this.state.mobileNavOpen} />
        {/* <Sidebar
          loggedInUser={this.state.loggedInUser}
          updateLoggedInUser={this.updateLoggedInUser}
        /> */}
        <Footer />
      </div>
    );
  }

  updateLoggedInUser = user => {
    this.setState({ loggedInUser: user });
  };

  toggleMobileNav = () => {
    this.setState(currentState => {
      return {
        mobileNavOpen: !currentState.mobileNavOpen
      };
    });
  };
}

export default App;
