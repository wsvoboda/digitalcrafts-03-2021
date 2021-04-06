const meetPeopleButton = document.querySelector(".meet");
const discoverPlacesButton = document.querySelector(".discover");
const bigPeopleContainer = document.querySelector(".meet-people");
const smallPeopleContainer = document.querySelector(".people-card-holder");

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
