var HelloWorld = React.createClass({
	render: function(){
		return (
			<p>Hello World, {this.props.name}!</p>
		);
	}
});

ReactDOM.render(
	<HelloWorld name="Daniel"/>,
	    document.getElementById('main')
	)