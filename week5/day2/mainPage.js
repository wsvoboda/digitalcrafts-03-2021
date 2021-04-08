const meetButton = document.querySelector(".meet");
const discoverPlacesButton = document.querySelector(".discover");
const holderOfAllCards = document.querySelector("#holder-of-all-cards");
const individualCardHolder = document.querySelector(".individual-card-holder");

const peopleList = async () => {
  if (individualCardHolder !== 0) {
    individualCardHolder.innerHTML = "";
  }
  const allPeople = await fetch(
    "https://fakerapi.it/api/v1/persons?_quantity=30&_locale=en_US"
  );
  const peopleForSite = await allPeople.json();
  for (let person of peopleForSite.data) {
    const firstName = person.firstname;
    const lastName = person.lastname;
    const city = person.address.city;
    const country = person.address.country;
    const email = person.email;
    const phoneNumber = person.phone;
    const infoOnPerson = `${firstName} ${lastName} <br>
    ${city} | ${country} <br>
    ${email} <br>
    ${phoneNumber}`;
    const peopleContainer = document.createElement("div");
    peopleContainer.className = "new-person";
    const meetHeader = document.querySelector(".card-header");
    meetHeader.innerHTML = "These people are open to new friendships!";
    const containerForInfo = document.createElement("h4");
    containerForInfo.innerHTML = infoOnPerson;
    const imageOfPerson = document.createElement("img");
    imageOfPerson.height = "200";
    imageOfPerson.width = "200";
    randomNumber = Math.floor(Math.random() * 90) + 1;
    const gender = person.gender;
    if (gender === "female") {
      imageOfPerson.src = `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`;
    } else {
      imageOfPerson.src = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
    }
    holderOfAllCards.prepend(meetHeader);
    peopleContainer.append(imageOfPerson, containerForInfo);
    individualCardHolder.append(peopleContainer);
    holderOfAllCards.scrollIntoView();
  }
};

meetButton.addEventListener("click", (e) => {
  peopleList();
});

const placesList = async () => {
  if (individualCardHolder !== 0) {
    individualCardHolder.innerHTML = "";
  }
  const allPlaces = await fetch(
    "https://fakerapi.it/api/v1/images?_quantity=30&_locale=en_US&_type=nature&_height=200&_width=200"
  );
  const placesForSite = await allPlaces.json();
  for (let place of placesForSite.data) {
    const placeName = place.title.slice(0, -1);
    const placeContainer = document.createElement("div");
    placeContainer.className = "new-place";
    const locationHeader = document.querySelector(".card-header");
    locationHeader.innerHTML = "Have fun adventuring these locales!";
    const containerForPlaceInfo = document.createElement("h4");
    containerForPlaceInfo.innerHTML = `${placeName}`;
    const imageOfPlace = document.createElement("img");
    randomNumber = Math.floor(Math.random() * 90) + 1;
    imageOfPlace.src = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`;
    holderOfAllCards.prepend(locationHeader);
    placeContainer.append(imageOfPlace, containerForPlaceInfo);
    individualCardHolder.append(placeContainer);
    holderOfAllCards.scrollIntoView();
  }
};

discoverPlacesButton.addEventListener("click", (e) => {
  placesList();
});

const listOfPics = [
  "camping.jpg",
  "hiking.jpg",
  "girls.jpg",
  "surfing.jpg",
  "party.jpg",
];

let index = 0;
const changeImage = () => {
  index += 1;
  if (index == listOfPics.length) index = 0;
  const imageFlip = document.getElementById("main-pic");
  imageFlip.src = listOfPics[index];
};

setInterval(function () {
  changeImage();
}, 4000);
