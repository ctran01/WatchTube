import React from "react";
import "./css/VideoItem.css";
import moment from "moment";
import { Link } from "react-router-dom";

class VideoItemHome extends React.Component {
  state = {
    data: null,
  };

  // grabVideoData = async (video) => {
  //   const response = await youtube.get(`/videos?part=snippet&part=statistics`, {
  //     params: {
  //       id: video.id.videoId,
  //       key: APIKey,
  //     },
  //   });

  //   const {
  //     data: { items },
  //   } = response;

  //   this.setState({ data: items[0] }, () => {
  //     console.log(this.state.data.statistics);
  //   });
  // };

  // componentDidMount() {
  //   this.grabVideoData(this.props.video);
  // }

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
    console.log("this is from the videoItemHome component", this.props.video);
    // console.log(
    //   "this is from the videoItemHome component state",
    //   this.state.data
    // );
    let views = this.abbreviateNumber(this.props.video.statistics.viewCount);

    return (
      <Link className="link" to="/video">
        <span
          className="video-list-home__video"
          onClick={() => this.props.onVideoSelect(this.props.video)}
        >
          <img
            src={this.props.video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          ></img>
          <div className="content video-list-home-video_content">
            <div className="header">
              <div className="video-list-home-video__videoTitle">
                <h4>{this.props.video.snippet.title}</h4>
              </div>
              <div className="video-list-home-video__videoSubTitle">
                <div style={{ fontWeight: "bold" }}>
                  {this.props.video.snippet.channelTitle}
                </div>
                <div className="video-list-home-video__stats">
                  {views} views • {date}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </span>
      </Link>
    );
  }
}

export default VideoItemHome;
