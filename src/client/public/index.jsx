import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MappedRoutes from '../comp/MappedRoutes';
import NavBar from '../comp/NavBar';
import routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import css from './index.css';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const Index = () => {
  return(
    <Provider store = { configureStore() }>
      <BrowserRouter>
        <NavBar />
        <MappedRoutes routes = { routes } />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Index />,document.getElementById('index'));
