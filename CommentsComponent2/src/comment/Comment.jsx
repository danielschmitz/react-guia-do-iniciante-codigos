import React from 'react';
import Panel from '../common/Panel';

var Comment = React.createClass({
  render: function() {
    return (
      <Panel title={this.props.author}>
        {this.props.children}
      </Panel>
    );
  }
});
export default Comment;