import React from "react";
import moment from "moment";
import "./css/Comment.css";
class VideoComment extends React.Component {
  render() {
    const date = moment(
      this.props.date.substring(0, 10).replace("-", ""),
      "YYYYMMDD"
    ).fromNow();
    return (
      <div className="comment">
        <div className="comment-icon">
          <i className="user icon"></i>
          <div className="comment-top">
            <h4>{this.props.author}</h4>
            {"  "}
            <p className="comment-date" style={{ color: "gray" }}>
              {date}
            </p>
          </div>
        </div>

        <p className="comment-body">{this.props.reply}</p>
        <div className="likes">
          <i className="thumbs up icon"></i>
          <i className="thumbs down icon"></i>
          <p>REPLY</p>
        </div>
      </div>
    );
  }
}

export default VideoComment;
