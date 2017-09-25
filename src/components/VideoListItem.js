import React from "react";

const VideoListItem = ({video, onVideoSelect}) => {
  // ({ video }) in arguments is same as lines below - ES6 syntax
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;
  
  // console.log(video);

  const imgURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  )
};

export default VideoListItem;