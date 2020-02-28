import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './components/home/Home';

render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);

