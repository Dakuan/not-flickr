import axios from "axios";
import R from "ramda";

const buildUrl = R.pipe(
      R.map(
        R.concat("tags[]=")), // put tags into query string format
      tags => tags.join("&"), // join query string
      R.concat("/api/feed?")); // add to stem

const api = {
  fetch: async function(tags = []) {
    let query = buildUrl(tags);
    return axios.get(query);
  }
};

export default api;
