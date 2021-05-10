import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo?.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title={selectedVideo?.snippet.title} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4>{selectedVideo?.snippet.title}</h4>
        <p>{selectedVideo?.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
