import React, { Component } from 'react';
import './App.css';
import MainPageHeader from './MainPageHeader/MainPageHeader';
import SolutionsOverview from './SolutionsOverview';
import ServicesOverview from './ServicesOverview';
import NewsFeed from '../NewsFeed/NewsFeed'
import { theme } from '../../constants'


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ color:theme.textColor, backgroundColor: "rgb(30, 30, 30)" }} className="App">
        <MainPageHeader />
        <SolutionsOverview />
        <ServicesOverview />
        <NewsFeed/>
      </div >
    );
  }

  componentDidMount() {


  }
}

export default App;