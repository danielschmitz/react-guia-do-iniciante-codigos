import React from 'react';
import ReactDOM from 'react-dom'
import CommentBox from './comment/CommentBox';


var data = [
                    {author: "Ted", text: "First"},
                    {author: "Daniel", text: "Hello World"}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);