
var data = [
                    {author: "Ted", text: "First"},
                    {author: "Daniel 2", text: "Hello World"}
    ];

var Panel = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default comment">
        <div className="panel-heading">
            {this.props.title}
        </div>
        <div className="panel-body">
            {this.props.children}
        </div>
      </div>
    );
  }
});
var Comment = React.createClass({
  render: function() {
    return (
      <Panel title={this.props.author}>
        {this.props.children}
      </Panel>
    );
  }
});
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
var CommentForm = React.createClass({
  handleSubmit: function(e){
      
      //cancela a propagação do evento
      e.preventDefault();

      var author = this.refs.author.value.trim();
      var text = this.refs.text.value.trim();

      if (!text || !author) {
        return;
      }

    //TODO: Precisa atualizar o DATA

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
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <Panel title="Comments">
            <CommentList data={this.props.data} />
        </Panel>
        <Panel title="Add a Comment">
            <CommentForm />
        </Panel>
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);