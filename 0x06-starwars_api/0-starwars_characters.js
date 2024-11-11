#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const film = JSON.parse(body);
  const characterUrls = film.characters;

  Promise.all(characterUrls.map((url) =>
    new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
        if (err) {
          reject(err);
          return;
        }

        const character = JSON.parse(body);
        console.log(character.name);
        resolve();
      });
    })
  ))
  .then(() => {
    console.log('All character names printed!');
  })
  .catch((err) => {
    console.error('Error fetching character names:', err);
  });
});
