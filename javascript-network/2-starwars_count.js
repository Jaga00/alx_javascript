/* script that prints the number of movies where 
the character “Wedge Antilles” is present*/

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    return;
  }

  const filmsData = JSON.parse(body);

  // Filter films where Wedge Antilles is present
  const filmsWithWedge = filmsData.results.filter(film => film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));

  console.log(`${filmsWithWedge.length}`);
});