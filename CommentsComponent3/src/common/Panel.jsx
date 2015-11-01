import React from 'react';

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
export default Panel;