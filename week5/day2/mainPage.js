const meetPeopleButton = document.querySelector(".meet");
const discoverPlacesButton = document.querySelector(".discover");
const bigPeopleContainer = document.querySelector(".meet-people");
const smallPeopleContainer = document.querySelector(".people-card-holder");
const bigPlaceContainer = document.querySelector(".discover-places");
const smallPlaceContainer = document.querySelector(".location-card-holder");

const peopleList = async () => {
  const allPeople = await fetch(
    "https://fakerapi.it/api/v1/persons?_quantity=30&_locale=en_US"
  );
  const peopleForSite = await allPeople.json();
  for (let i = 0; i < peopleForSite.data.length; i++) {
    const firstName = peopleForSite.data[i].firstname;
    const lastName = peopleForSite.data[i].lastname;
    const city = peopleForSite.data[i].address.city;
    const country = peopleForSite.data[i].address.country;
    const email = peopleForSite.data[i].email;
    const phoneNumber = peopleForSite.data[i].phone;
    const infoOnPerson = `${firstName} ${lastName} <br>
    ${city} | ${country} <br>
    ${email} <br>
    ${phoneNumber}`;
    const peopleContainer = document.createElement("div");
    peopleContainer.className = "new-person";
    const meetHeader = document.querySelector(".meet-header");
    meetHeader.innerHTML = "These people are open to new friendship!";
    const containerForInfo = document.createElement("h4");
    containerForInfo.innerHTML = infoOnPerson;
    const imageOfPerson = document.createElement("img");
    imageOfPerson.height = "200";
    imageOfPerson.width = "200";
    imageOfPerson.src = peopleForSite.data[i].image;
    bigPeopleContainer.prepend(meetHeader);
    peopleContainer.append(imageOfPerson, containerForInfo);
    smallPeopleContainer.append(peopleContainer);
  }
};

meetPeopleButton.addEventListener("click", (e) => {
  peopleList();
});

const placesList = async () => {
  const allPlaces = await fetch(
    "https://fakerapi.it/api/v1/images?_quantity=30&_locale=en_US&_type=nature&_height=200&_width=200"
  );
  const placesForSite = await allPlaces.json();
  for (let i = 0; i < placesForSite.data.length; i++) {
    const placeName = placesForSite.data[i].title;
    const placeImageURL = placesForSite.data[i].url;
    const placeContainer = document.createElement("div");
    placeContainer.className = "new-place";
    const locationHeader = document.querySelector(".discover-header");
    locationHeader.innerHTML = "Have fun adventuring these locales!";
    const containerForPlaceInfo = document.createElement("h4");
    containerForPlaceInfo.innerHTML = `${placeName}`;
    const imageOfPlace = document.createElement("img");
    imageOfPlace.src = placeImageURL;
    bigPlaceContainer.prepend(locationHeader);
    placeContainer.append(imageOfPlace, containerForPlaceInfo);
    smallPlaceContainer.append(placeContainer);
  }
};

discoverPlacesButton.addEventListener("click", (e) => {
  placesList();
});
