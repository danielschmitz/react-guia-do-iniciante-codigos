import React from 'react';
import ReactDOM from 'react-dom'
import CommentBox from './comment/CommentBox';

ReactDOM.render(
  <CommentBox url="comments.json" />,
  document.getElementById('content')
);