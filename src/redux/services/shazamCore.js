const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f5dbd09b6msh8c151eee32a6506p1f1223jsn31401d66947b",
    "X-RapidAPI-Host": "",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
