import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import youtube from "./API/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Comment from "./components/Comment";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("essence");
  }, []);

  const onSearchSubmit = async (videoSearchTerm) => {
    //API request using axios
    const response = await youtube.get("/search", {
      params: {
        q: videoSearchTerm,
      },
    });
    setVideos(response.data.items);
    //Render a default video as initial video
    setSelectedVideo(response.data.items[0]);
  };

  //send as a callback to the VideoItem component
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <SearchInput onSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            <Comment />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
