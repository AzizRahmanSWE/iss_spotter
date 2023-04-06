const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');
// Will run our main fetch function
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// })
// module.exports = { fetchMyIP };

// 142.126.207.166

// fetchCoordsByIP('142.126.207.166', (error, resultCoords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }

//   console.log('It Worked! Returned data: ', resultCoords);
// });

// module.exports = { fetchCoordsByIP };

const myExampleCoords = { latitude: 43.653226, longitude: -79.3831843 };

fetchISSFlyOverTimes(myExampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned flyover times: ', passTimes);
});