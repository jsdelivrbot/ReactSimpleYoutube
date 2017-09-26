import React from "react";

const VideoListItem = ({video, onVideoSelect}) => {
  // ({ video }) in arguments is same as lines below - ES6 syntax
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;

  const imgURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video_list media">
        <div className="media_left">
          <img className="media_object" src={imgURL} />
        </div>
        <div className="media_body">
          <div className="media_heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  )
};

export default VideoListItem;