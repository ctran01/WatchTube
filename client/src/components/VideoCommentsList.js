import React, { Component } from "react";

import VideoComment from "./VideoComment";

class VideoCommentsList extends React.Component {
  renderedList = this.props.comments.map((comment) => {
    return (
      <VideoComment
        key={comment.id}
        author={comment.snippet.topLevelComment.snippet.authorDisplayName}
        date={comment.snippet.topLevelComment.snippet.publishedAt}
        reply={comment.snippet.topLevelComment.snippet.textDisplay}
      ></VideoComment>
    );
  });

  render() {
    console.log("this is the comments", this.props.comments);
    return (
      <div className="comments-section">
        <h3> {this.props.comments.length} Comments </h3>
        <div className="ui relaxed list">{this.renderedList}</div>
      </div>
    );
  }
}

export default VideoCommentsList;
