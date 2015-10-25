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
         <Comment author="Ted">First...</Comment>
         <Comment author="Daniel">Hello World</Comment>
      </div>
    );
  }
});
var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        CommentForm
      </div>
    );
  }
});
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <Panel title="Comments">
            <CommentList />
        </Panel>
        <Panel title="Add a Comment">
            <CommentForm />
        </Panel>
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);