import React, { Component } from 'react';
import './App.css';
import MainPageHeader from './MainPageHeader/MainPageHeader';
import SolutionsOverview from './SolutionsOverview';
import ServicesOverview from './ServicesOverview';
import NewsFeed from '../NewsFeed/NewsFeed'
import { theme } from '../../constants'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-104662195-2');

class App extends Component {

  constructor(props) {
    super(props);
    const { history } = this.props;
    ReactGA.pageview(history.location.pathname);
    history.listen(e => {
      ReactGA.pageview(e.pathname);
    });
  }

  render() {
    return (
      <div style={{ color: theme.textColor, backgroundColor: "rgb(30, 30, 30)" }} className="App">
        <MainPageHeader />
        <SolutionsOverview />
        <ServicesOverview />
        <NewsFeed />
      </div >
    );
  }
}

export default App;