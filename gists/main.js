
var UserGist = React.createClass({

  getInitialState:function(){
      return {
        data: []
      };
  },
  componentDidMount:function(){
    $.ajax(this.props.source).done(function(result){
      this.setState({data:result});
    }.bind(this));
  },

 render: function() {

    return (
      <div>
        Your gist url: {this.props.source}
        <br/>
        <div>Your data has {this.state.data.length} entries</div>
        <ul>
            {this.state.data.map(function(item,i){
                return <li><a href={item.url}>{item.description}</a></li>;
            })}
        </ul>
      </div>
    );
  }
});
ReactDOM.render(
  <UserGist source="https://api.github.com/users/danielschmitz/gists" />,
  content
);