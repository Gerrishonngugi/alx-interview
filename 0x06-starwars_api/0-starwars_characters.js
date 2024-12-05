#!/usr/bin/node
<<<<<<< HEAD

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, async (err, res, body) => {
  err && console.log(err);

  const charactersArray = (JSON.parse(res.body).characters);
  for (const character of charactersArray) {
    await new Promise((resolve, reject) => {
      request(character, (err, res, body) => {
        err && console.log(err);

        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
=======
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const characters = JSON.parse(body).characters;
  let count = 0;

  const printCharacter = (index) => {
    if (index === characters.length) return;

    request(characters[index], (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(JSON.parse(body).name);
      printCharacter(index + 1);
    });
  };

  printCharacter(0);
>>>>>>> 6d1f6fa6faab1d9005267f8680103ec7fb6955fa
});
