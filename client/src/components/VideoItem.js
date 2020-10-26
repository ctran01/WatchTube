import React from "react";
import moment from "moment";
import "./css/VideoItem.css";

import { Link } from "react-router-dom";
class VideoItem extends React.Component {
  abbreviateNumber(number) {
    let SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    // what tier? (determines SI symbol)
    var tier = (Math.log10(number) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }

  render() {
    const date = moment(
      this.props.video.snippet.publishedAt.substring(0, 10).replace("-", ""),
      "YYYYMMDD"
    ).fromNow();
    console.log(
      "This is from the videoItem component props.video",
      this.props.video
    );
    let views = this.abbreviateNumber(this.props.video.statistics.viewCount);
    console.log("selected video from video itrem", this.props.selectedVideo);
    return (
      <Link className="link" to="/video">
        <span
          className="video-item item"
          onClick={() => this.props.onVideoSelect(this.props.video)}
        >
          <img
            src={this.props.video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          ></img>
          <div className="content video-item-content">
            <div className="header video-item-title">
              <div style={{ fontWeight: "bold" }}>
                {this.props.video.snippet.title}
              </div>
            </div>
            <div className="video-item-subtitle">
              {this.props.video.snippet.channelTitle}{" "}
              <div className="video-item-stats">
                {views} views • {date}
              </div>
            </div>
            <div className="video-item-description">
              {this.props.selectedVideo === undefined
                ? this.props.video.snippet.description
                : " "}
              {/* {this.props.video.snippet.description} */}
            </div>
          </div>
        </span>
      </Link>
    );
  }
}

export default VideoItem;
