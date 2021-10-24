import VideoItem from "./VideoItem";

//pass video data to Video Item component
const VideoList = ({ videos, onVideoSelect }) => (
  <div className="ui relaxed divided list ">
    {videos.map((video) => (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    ))}
  </div>
);

export default VideoList;
