import React from 'react';
import { Router } from '@reach/router';
import './styles/layout.css';
import './styles/fonts.css';
import './styles/mobile-nav.css';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlesList from './pages/ArticlesList';
import SingleArticle from './pages/SingleArticle';
import ChangeUser from './pages/ChangeUser';
import MobileMenu from './components/MobileMenu';
import ErrorPage from './components/ErrorPage';
import HomePage from './pages/HomePage';

const MainGridWrapper = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: minmax(1.2rem, 1fr) minmax(auto, 850px) minmax(
      1.2rem,
      1fr
    );
  min-height: 100vh;
`;

const MainContent = styled.div`
  grid-column: 2;
  padding-top: 20px;
`;

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
        <MainGridWrapper>
          <MainContent>
            <Router primary={false}>
              <HomePage path="/" />
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
          </MainContent>
        </MainGridWrapper>
        <MobileMenu
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMobileMenu={this.toggleMobileMenu}
        />
        <Footer />
      </div>
    );
  }

  updateLoggedInUser = user => {
    this.setState({ loggedInUser: user });
  };

  toggleMobileMenu = () => {
    this.setState(
      currentState => {
        return {
          mobileMenuOpen: !currentState.mobileMenuOpen
        };
      },
      () => {
        if (this.state.mobileMenuOpen) {
          document.body.classList.remove('allow-scrollable-body');
          document.body.classList.add('prevent-scrollable-body');
          window.scrollTo(0, 0);
        } else {
          document.body.classList.add('allow-scrollable-body');
          document.body.classList.remove('prevent-scrollable-body');
        }
      }
    );
  };
}

export default App;
