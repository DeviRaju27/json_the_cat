const request = require('request');

const fetchBreedDescription = function(userInput, callbackfunc) {
  const domainName = `https://api.thecatapi.com/v/breeds/search?q=${userInput}`;
  request(domainName, (error, response, body) => {

    if (error)  callbackfunc(error,null); 
    const parsedBody = JSON.parse(body);
    const breed = parsedBody[0];
    if (breed)  callbackfunc(null, breed.description); 
    callbackfunc("breed not found", null);
  });
};
module.exports = { fetchBreedDescription };

