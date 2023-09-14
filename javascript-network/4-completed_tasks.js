// script that computes the number of tasks completed by user id

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

  const tasks = JSON.parse(body);

  const completedTasksByUser = {};

  tasks.forEach(task => {
    if (task.completed) {
      const userId = task.userId;

      if (!completedTasksByUser[userId]) {
        completedTasksByUser[userId] = 1;
      } else {
        completedTasksByUser[userId]++;
      }
    }
  });

  for (const userId in completedTasksByUser) {
    console.log(`User ${userId} completed ${completedTasksByUser[userId]} tasks.`);
  }
});