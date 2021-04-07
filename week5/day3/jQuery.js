$(document).ready(() => {
  console.log("We are in jQuery");
});

// create an element on the DOM using jQuery
const $jdivContainer = $("<div>");
const $header3 = $("<h3>", {
  text: "Whitney is here",
});
$jdivContainer.append($header3);
$(document.body).append($jdivContainer);

// target CSS on a jQuery element
$header3.css("color", "red");

// button.addEventListener("click", () => {}); // javascript method

// $btn.on("click", () => {}); // jQuery method

// fulfilling a promise
$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
})
  .then((res) => {
    console.log(res);
  })
  .catch((valueReturned) => {
    console.error(valueReturned);
  });

// using a catch statement

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/ditto456464",
})
  .then((res) => {
    console.log(res);
  })
  .catch((valueReturned) => {
    console.error(valueReturned);
  });

// targeting items from API

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
}).then((res) => {
  console.log(res.name);
});
