import axios from "axios";

const instance = axios.create({
  //The API (cloud function) URL
  baseURL: "https://us-central1-e-proj-clone.cloudfunctions.net/api",
});

export default instance;
