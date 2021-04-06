const meetPeopleButton = document.querySelector(".meet");
const discoverPlacesButton = document.querySelector(".discover");

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

    console.log(
      `${firstName} ${lastName} ${city} ${country} ${email} ${phoneNumber}`
    );
  }
};

peopleList();
