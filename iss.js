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
// const fetchMyIP = function(cb) {

//   request("https://api.ipify.org?format=json", (error, response, body) => {
//     if (error) {
//       cb(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       cb(Error(msg), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     cb(null, ip);
//   });
// };

const fetchCoordsByIP = function(ip, cb) {

  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      cb(error, null);
      return;
    }

    // Parse the body
    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      cb(Error(message), null);
      return;
    }

    const { latitude, longitude } = parsedBody;
    cb(null, { latitude, longitude });
    
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, cb) {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      cb(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      cb(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    cb(null, passes);
  });
};

// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };
