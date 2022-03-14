import React from 'react';
import ReactDOM from 'react-dom';
// 
import GifExpertApp from './GifExpertApp';
import './index.css';
import { defaultCategories } from './libraries/categories'

ReactDOM.render(
  <GifExpertApp defaultCategories={ defaultCategories } />,
  document.getElementById('root')
);