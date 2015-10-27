

var UserGist = React.createClass({

 render: function() {
    return (
      <div>
        Your gist url: {this.props.source}
      </div>
    );
  }

});



ReactDOM.render(
  <UserGist source="https://api.github.com/users/danielschmitz/gists" />,
  content
);
