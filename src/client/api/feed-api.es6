import axios from "axios";

const api = {
  fetch: function() {
    return axios.get(`/api/feed`);
  }
};

export default api;
