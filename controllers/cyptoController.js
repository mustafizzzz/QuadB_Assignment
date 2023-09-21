const cryptoModal = require('../models/cryptoModal');
const axios = require('axios');
const colors = require('colors');


const cryptoDataController = async (req, res) => {
  try {
    // Fetch data from the WazirX API
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

    // Extract the top 10 results
    console.log(`Data Below`.bgBlue);

    const top10CryptoData = Object.values(response.data).slice(0, 10);
    console.log(top10CryptoData);


    // Store the data in MongoDB
    await cryptoModal.deleteMany({}); // Clear existing data
    await cryptoModal.insertMany(top10CryptoData);
    res.json(
      {
        message: 'Cryptocurrency data updated and stored successfully',
        top10CryptoData
      }
    );

  } catch (error) {
    console.error('Error fetching and storing cryptocurrency data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


const cryptoFetchController = async (req, res) => {
  try {
    const cryptoData = await cryptoModal.find({}, '-_id name last buy sell volume base_unit')
      .limit(10)
      .sort({ volume: -1 });

    res.json(cryptoData);
  } catch (error) {
    console.error('Error retrieving cryptocurrency data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = { cryptoDataController, cryptoFetchController }