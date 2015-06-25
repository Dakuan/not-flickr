import axios from "axios";
import R from "ramda";

const api = {
  fetch: async function(tags = []) {
    let query = R.pipe(
      R.map((tag) => {
        return `tags[]=${tag}`;
      }),
      (ts) => {
        return ts.join("&");
      }
    )(tags);
    return axios.get(`/api/feed?${query}`);
  }
};

export default api;
