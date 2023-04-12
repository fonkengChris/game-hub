import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bdfc190dfd948678a44ee4f164cee36",
  },
});
