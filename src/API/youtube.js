import axios from "axios";

const KEY = "AIzaSyC4N-7_LW4pbgdv9SevQbTKQb8Az_VpOYM";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
