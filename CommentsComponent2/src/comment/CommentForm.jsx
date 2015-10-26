import React from 'react';

var CommentForm = React.createClass({
  handleSubmit: function(e){

      //cancela a propagação do evento
      e.preventDefault();

      var author = this.refs.author.value.trim();
      var text = this.refs.text.value.trim();

      if (!text || !author) {
        return;
    }

    this.props.onCommentSubmit({author:author, text:text});

    this.refs.author.value = '';
    this.refs.text.value = '';
    return;

},
render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
      <div className="form-group">
      <label htmlFor="name">Author:</label>
      <input type="text" className="form-control" 
      ref="author"/>
      </div>
      <div className="form-group">
      <label htmlFor="text">Text:</label>
      <textarea className="form-control" 
      rows="3" ref="text"></textarea>
      </div>
      <input type="submit" value="Post" className="btn" />
      </form>
      );
}
});
export default CommentForm;