const axios = require("axios");

module.exports.getPublicIP = () => {
  return axios.get("http://localhost:3000/get-public-ip");
};
