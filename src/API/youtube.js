import axios from "axios";

const KEY = "AIzaSyATGSPSCinNKT4JRmqoSTm9Qq9Bx4Yi7JA";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
