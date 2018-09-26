import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { TagLine } from '../TagLine/TagLine';
import { Footer } from '../Footer/Footer';
import { Services } from '../Services/Services';
import SolutionsOverview from './SolutionsOverview';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SolutionsOverview />
        <Services />
        <Footer />
      </div >
    );
  }

  componentDidMount() {
    
    //This controls the nav bar expanding and contracting based on the scroll    
    //attach an event handler that is called when the scroll event is fired
    $(window).on("scroll", function () {
      //if we are far enough away from the top (20px away)
      if ($(window).scrollTop() >= 20) {
        //add the compressed css class to anything with class navbar
        $(".navbar").addClass("compressed");
        //add the text-dark css class to any <a> tag that is a child of something with class navbar
        $(".navbar a").addClass("text-dark");
        //add the smallIcon css class to anything with class logo
        $(".logo").addClass("smallIcon");
        //remove the hidden css class to any <h5> that is a child of something with class navbar
        $(".navbar h5").removeClass("hidden");
      } else {
        //else we are close to the top again so remove all these classes
        $(".navbar").removeClass("compressed");
        $(".navbar a").removeClass("text-dark");
        $(".logo").removeClass("smallIcon");
        $(".navbar h5").addClass("hidden");
      }
    });
  }
}

export default App;
