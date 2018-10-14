import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as popper from 'popper.js'
import * as bootstrap from 'bootstrap'
import App from './components/Home/App';
import { Solutions } from './components/Solutions/Solutions'
import { Services } from './components/Services/Services'
import NewsArticle from './components/NewsArticle/NewsArticle'
import Clients from './components/Clients/Clients'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer';
import Contact from './components/Contact/Contact'
import { theme } from './constants';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


ReactDOM.render((
    <Router
        onUpdate={() => { window.scrollTo(0, 0); $(".navbar-controller").removeClass("show"); }
        } >
        <ScrollToTop>
            <div style={{ color: theme.textColor }} className="">
                <Nav />
                <Route exact path="/" render={(props) => <App {...props} isAuthed={true} />} />
                <Route exaxt path="/solutions" component={Solutions} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/clients" component={Clients} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/article/:id" component={NewsArticle} />
                <Footer />
            </div>
        </ScrollToTop>
    </Router>
), document.getElementById('root'));
registerServiceWorker();

//This controls the nav bar expanding and contracting based on the scroll    
//attach an event handler that is called when the scroll event is fired
$(window).on("scroll", function () {
    //if we are far enough away from the top (20px away)
    if ($(window).scrollTop() >= 20) {
        //add the compressed css class to anything with class navbar
        $(".navbar").addClass("compressed");
        $(".navbar-controller").removeClass("show");
        $(".navbar").css("background-color", theme.primaryColor2);
        $(".navbar").removeClass("top-down-gradient");
        //add the text-dark css class to any <a> tag that is a child of something with class navbar
        $(".navbar a").addClass("text-light");
        //add the smallIcon css class to anything with class logo
        $(".logo").removeClass("brand-icon");
        $(".logo").addClass("brand-icon-small");
        //remove the hidden css class to any <h5> that is a child of something with class navbar
        $("nav h5").removeClass("hidden");
    } else {
        //else we are close to the top again so remove all these classes
        $(".navbar").removeClass("compressed");
        $(".navbar").css("background-color", '');
        $(".navbar a").removeClass("text-light");
        $(".logo").addClass("brand-icon");
        $(".logo").removeClass("brand-icon-small");
        $("nav h5").addClass("hidden");
        $(".navbar").addClass("top-down-gradient");
    }
});
