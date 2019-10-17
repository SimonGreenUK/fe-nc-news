import React from 'react';
import { Router } from '@reach/router';
import './styles/layout.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import ChangeUser from './components/ChangeUser';
import MobileMenu from './components/MobileMenu';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  state = {
    loggedInUser: {
      username: 'jessjelly',
      avatar_url:
        'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
      name: 'Jess Jelly'
    },
    mobileMenuOpen: false
  };
  render() {
    return (
      <div className="App">
        <Header
          loggedInUser={this.state.loggedInUser}
          toggleMobileMenu={this.toggleMobileMenu}
        />
        <main className="main-grid-wrapper">
          <div className="main-content">
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
          </div>
        </main>
        <MobileMenu
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMobileMenu={this.toggleMobileMenu}
        />
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

  toggleMobileMenu = () => {
    this.setState(currentState => {
      return {
        mobileMenuOpen: !currentState.mobileMenuOpen
      };
    });
  };
}

export default App;
