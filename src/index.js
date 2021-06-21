import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
// import "./ResponsiveNew.css"
import "./ResponsiceNew.css"
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>

,
  document.getElementById('root')
);

