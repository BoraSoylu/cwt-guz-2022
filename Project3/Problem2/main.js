import generateAll from "./framework_at_home.js";

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    generateAll(json)
  });