console.log('index.js');

import React from 'react';
import ReactDOM from 'react-dom'
import CommentBox from './comment/CommentBox';

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);