const { fetchBreedDescription } = require('./breedFetcher')

const userInput = process.argv[2];

fetchBreedDescription(userInput, (error, desc) => {
  if(error) return error
  return desc
})