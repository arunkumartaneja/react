import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dQFlpTkXb7W6adnkpYFIEeX5L3tqC-4rCrQFLQpZaxQ",
  },
});
