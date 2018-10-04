import React, { Component } from 'react';
import './App.css';
import MainPageHeader from './MainPageHeader/MainPageHeader';
import SolutionsOverview from './SolutionsOverview';
import ServicesOverview from './ServicesOverview';
import { theme } from '../../constants'


class App extends Component {
  render() {
    return (
      <div style={{ color:theme.textColor, backgroundColor: "rgb(30, 30, 30)" }} className="App">
        <MainPageHeader />
        <SolutionsOverview />
        <ServicesOverview />
      </div >
    );
  }

  componentDidMount() {


  }
}

export default App;