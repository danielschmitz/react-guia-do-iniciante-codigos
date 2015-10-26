import React from 'react';
import Panel from '../common/Panel';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


var CommentBox = React.createClass({
   getInitialState: function() {
    return {data: this.props.data};
  },
  handleCommentSubmit: function(comment){
    var dataNew = this.state.data;
    dataNew.push(comment)
    this.setState({data:dataNew});
  },
  render: function() {
    return (
     <div className="commentBox">
        <Panel title="Comments">
             <CommentList data={this.state.data} />
        </Panel>
        <Panel title="Add a Comment">
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </Panel>
      </div>
    );
  }
});
export default CommentBox;