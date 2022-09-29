const request = require('request');
const userInput = process.argv[2];
const domainName = "https://api.thecatapi.com/v1/breeds/search?q=" + userInput;

request(domainName, (error, response, body) => {
  if (error) return error;
  const parsedBody = JSON.parse(body)
  console.log('body:', parsedBody);

});
