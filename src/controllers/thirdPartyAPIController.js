const axios = require('axios');

const getDataFromAPI = async (req, res) => {
  try {
    // Make a request to the third-party API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDataFromAPI,
};
