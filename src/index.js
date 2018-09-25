import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Home/App';
import { Services } from './components/Services/Services'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'

ReactDOM.render((
    <Router>
        <div>
            <Nav />
            <Route exact path="/" component={App} />
            <Route path="/services" component={Services} />
        </div>

    </Router>
), document.getElementById('root'));
registerServiceWorker();
