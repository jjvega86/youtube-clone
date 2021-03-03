import axios from "axios";

const KEY = "AIzaSyDoj19NPebJQAWyWZm-4jCrD9pmsB3Qvd4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
