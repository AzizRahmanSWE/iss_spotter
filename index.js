const { fetchMyIP, fetchCoordsByIP } = require('./iss');
// Will run our main fetch function
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// })
// 142.126.207.166
fetchCoordsByIP('142.126.207.166', (error, resultCoords) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log('It Worked! Returned data: ', resultCoords);
});

// module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };