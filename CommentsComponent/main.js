
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