import React from 'react';
import Comment from './Comment'

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
            {this.props.data.map(function(c){
                return <Comment author={c.author}>
                    {c.text}
                </Comment>;
            })}
      </div>
    );
  }
});
export default CommentList;