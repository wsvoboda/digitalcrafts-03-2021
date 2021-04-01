const form = document.querySelector("form");

// writing a function in a different way. Fat arrow method. Use this method going forward
const validateName = (name) => {
  myRegex = /[A-Za-z]+/;
  return myRegex.test(name);
};
// returns true or false. If the name is all letters, it returns true, if it contains something aside from letters, it returns false

// console.log(validateName());

form.addEventListener("submit", (event) => {
  const textInput = document.querySelector("#textInput");
  if (!validateName(textInput.value)) {
    // means the same as (validateName === false)
    event.preventDefault();
    alert("Please enter in a valid name that doesn't contain numbers");
  }
});
