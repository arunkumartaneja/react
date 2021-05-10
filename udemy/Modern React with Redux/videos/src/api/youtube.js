import axios from "axios";

const KEY = "AIzaSyCsODV8DL1Zz5mPriN04GCUxhuIj4qKTz8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
