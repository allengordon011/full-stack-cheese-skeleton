import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// IMPORT COMPONENTS AND REDUCERS

console.log(`Client running in ${process.env.NODE_ENV} mode`);

// CREATE STORE

// REACT DOM RENDER WITH PROVIDER AND CHEESELIST
