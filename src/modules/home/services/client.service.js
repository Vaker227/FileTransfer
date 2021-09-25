const axios = require("axios");

module.exports.getPublicIP = () => {
  return axios.get("https://file-transfers.herokuapp.com/get-public-ip");
};
