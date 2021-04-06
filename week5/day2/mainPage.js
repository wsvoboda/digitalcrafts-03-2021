const meetPeopleButton = document.querySelector(".meet");
const discoverPlacesButton = document.querySelector(".discover");
const bigPeopleContainer = document.querySelector(".meet-people");

const peopleList = async () => {
  const allPeople = await fetch(
    "https://fakerapi.it/api/v1/persons?_quantity=30&_locale=en_US"
  );
  const peopleForSite = await allPeople.json();
  console.log(peopleForSite); // pulling data correctly
  //   const peopleContainer = document.createElement("div");
  //   peopleContainer.className = "new-person";
  //   const personImage = document.createElement("img");
  for (let i = 0; i < peopleForSite.data.length; i++) {
    const firstName = peopleForSite.data[i].firstname;
    const lastName = peopleForSite.data[i].lastname;
    const city = peopleForSite.data[i].address.city;
    const country = peopleForSite.data[i].address.country;
    const email = peopleForSite.data[i].email;
    const phoneNumber = peopleForSite.data[i].phone;
    const infoOnPerson = `${firstName} ${lastName} ${city} ${country} ${email} ${phoneNumber}`;
    const peopleContainer = document.createElement("div");
    peopleContainer.className = "new-person";
    const containerForInfo = document.createElement("p");
    containerForInfo.innerHTML = infoOnPerson;
    peopleContainer.append(containerForInfo);
    bigPeopleContainer.append(peopleContainer);
  }
};

peopleList();
