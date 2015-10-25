var HelloWorld = React.createClass({
	render: function(){
		return (
			<p>Hello World, <span className='label label-primary'>{this.props.name}</span></p>
		);
	}
});

ReactDOM.render(
	<HelloWorld name="Daniel"/>,
	    document.getElementById('main')
	)