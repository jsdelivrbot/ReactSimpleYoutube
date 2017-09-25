import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    // good practice to make sure I'm adding keys so react knows which items to update
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
