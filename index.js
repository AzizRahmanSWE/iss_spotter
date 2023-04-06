const { fetchMyIP } = require('./iss');
// Will run our main fetch function





// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP: ', ip);
// })


module.exports = { fetchMyIP };