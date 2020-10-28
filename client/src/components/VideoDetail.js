import React from "react";
import "./css/VideoItem.css";
import moment from "moment";
import VideoCommentsList from "./VideoCommentsList";
class VideoDetail extends React.Component {
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
    if (!this.props.video) {
      return (
        <React.Fragment>
          <div>Recommended Videos</div>
        </React.Fragment>
      );
    }

    const videoSrc = this.props.video.id.videoId || this.props.video.id;
    const date = moment(
      this.props.video.snippet.publishedAt.substring(0, 10).replace("-", ""),
      "YYYYMMDD"
    );
    let views = this.abbreviateNumber(this.props.video.statistics.viewCount);

    return (
      <div>
        <div className="ui embed embed-this.props.video">
          {/* <iframe
          title="this.props.video player"
          src={`https://www.youtube.com/embed/${videoSrc}`}
        /> */}
          <iframe
            width="560"
            height="315"
            title="this.props.video player"
            src={`https://www.youtube.com/embed/${videoSrc}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="ui header"> {this.props.video.snippet.title}</h3>
        <p className="this.props.video-stats" style={{ color: "#606060" }}>
          {views} views • {date.format("MMM Do YYYY")}
        </p>
        <div className="ui segment video-content">
          <div>
            <i className="user icon"></i>
            <a
              href={`https://www.youtube.com/channel/${this.props.video.snippet}`}
            >
              {this.props.video.snippet.channelTitle}
            </a>
          </div>

          <p className="video-description">
            {this.props.video.snippet.description}
          </p>
        </div>
        {/* <VideoCommentsList comments={this.props.comments}></VideoCommentsList> */}
      </div>
    );
  }
}
export default VideoDetail;
