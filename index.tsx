import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.scss';

var root: HTMLElement = document.getElementById('root');

render(
  <App
    compiler='TypeScript'
    framework='React'
    bundler='parcel-bundler'
    styles='SCSS'
  />,
  root
);

