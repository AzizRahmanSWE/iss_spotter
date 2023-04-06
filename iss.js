const request = require('request');

// Will contain most of the logic for fetching the data from each API endpoint
/**
 * Makes a single API request to retrieve the user's IP adderss.
 * Input:
 *  - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *  - An error, if any (nullable)
 *  - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(cb) {
  const url = `https://api.ipify.org?format=json`;

  request(url, (error, response, body) => {
    if (error) {
      cb(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      cb(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    cb(null, ip);
  });
};

module.exports = { fetchMyIP };