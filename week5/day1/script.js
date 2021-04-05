// const request = new XMLHttpRequest(); // creates an object
// // do something when state changes
// request.onreadystatechange = function () {
//   //   console.log("console.log this ", this);
//   const response = JSON.parse(this.responseText);
//   //   console.log(response.name);
//   const image = document.createElement("img");
//   image.src = response.sprites.front_default;
//   const div = document.querySelector(".root");
//   div.append(image);
//   //   console.log(response);
//   //   console.log(this.status);
//   //   console.log(this.response);
//   //   console.log(this.responseURL);
// }; // status update
// request.open("GET", "https://pokeapi.co/api/v2/pokemon/6"); // open takes 2 arguments, HTTP Method, is the URL or location of what you want to get
// request.send();
// console.log(request);
// // console.log("Grabbing user input");
// // console.log("Grabbing user address");
// // setTimeout(() => console.log("Writing in letter body"), 3000); // setTimeout, then an anonymous function, then your function, then amount in milliseconds
// // console.log("Mail a letter to user");

// const getPokemonData = () => {
//   const data = fetch("https://pokeapi.co/api/v2/pokemon/1")
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data);
//       let name = document.createElement("h1");
//       name.innerHTML = data.name;
//       let img = document.createElement("img");
//       let root = document.querySelector(".root");
//       img.src = data.sprites.front_default;
//       root.append(img, name);
//     });
// };

// const getPokemonData = () => {
//   const data = fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.name);
//       let name = document.createElement("h1");
//       name.innerHTML = data.name;
//       let img = document.createElement("img");
//       let root = document.querySelector(".root");
//       img.src = data.sprites.front_default;
//       root.append(img, name);
//     });
// };

const getPokemonData = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const formattedJson = await data.json();
  console.log(formattedJson);
  console.log(formattedJson.name);
};

getPokemonData();

// fetch("https://pokeapi.co/api/v2/pokemon/1").then((response) => {
//       //   console.log(response);
//       response.json().then((data) => {
//         // console.log(data);
//         pokemonData = data;
//         console.log(pokemonData);
//       });
//     });

// console.log(pokemonData);
