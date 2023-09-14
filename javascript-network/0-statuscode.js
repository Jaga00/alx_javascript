// script that display the status code of a GET request

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Please provide a URL as the first argument');
  process.exit(1);
}

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  console.log(`code: ${response.statusCode}`);
});