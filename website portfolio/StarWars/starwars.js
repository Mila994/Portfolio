let buttonC = document.getElementById("cosmonaut");
let buttonS = document.getElementById("spaceship");

let tableHead = document.getElementById("headRow");
let tableBody = document.getElementById("tableBody");

let currentPage = 1;

let btnNext = document.getElementById("next");
let btnPrevious = document.getElementById("previous");

const peopleUrl = `https://swapi.dev/api/people/?page=`;
const spaceShipsUrl = `https://swapi.dev/api/starships/?page=`;

let workingOn;

function showHideNavButtons(responseFromApi) {
  if (responseFromApi.next == null) {
    btnNext.setAttribute("hidden", true);
    btnPrevious.removeAttribute("hidden");
  } else if (responseFromApi.previous == null) {
    btnNext.removeAttribute("hidden");
    btnPrevious.setAttribute("hidden", true);
  } else {
    btnNext.removeAttribute("hidden");
    btnPrevious.removeAttribute("hidden");
  }
}

function printTablePeople(data) {
  //funkcija za podatoci vo people
  loader.setAttribute("hidden", true);
  tableBody.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    tableBody.innerHTML += `
    <tr>
      <td>${data.results[i].name}</td>
      <td>${data.results[i].height}</td>
      <td>${data.results[i].mass}</td>
      <td>${data.results[i].gender}</td>
      <td>${data.results[i].birth_year}</td>
      <td>${data.results[i].films.length}</td>
    </tr>
    `;
  }
}

async function getDataPeople() {
  try {
    const response = await fetch(peopleUrl + currentPage);
    const data = await response.json();
    console.log(data);
    
    return data;

  } catch (error) {
    console.error(error);
  }
}

buttonC.addEventListener("click",  async ()=> {
  workingOn = "cosmonaut";
  currentPage = 1;

  tableHead.innerHTML = `
   <tr id="yellowHeader">
      <td>Name</td>
      <td>Height</td>
      <td>Mass</td>
      <td>Gender</td>
      <td>Birthyear</td>
      <td>Films</td>
    </tr>
    `;

    await workWithDataPeople();
});

btnNext.addEventListener("click", async ()=> {
  tableBody.innerHTML = "";
  loader.removeAttribute("hidden");
  currentPage++;

  if (workingOn === "cosmonaut") {
    await workWithDataPeople();
    
  } else {
    await workWithSpaceships();
  }
});

btnPrevious.addEventListener("click", async () => {
  //button previous
  tableBody.innerHTML = "";
  loader.removeAttribute("hidden"); //loading se pojavuvat
  currentPage--;

  if (workingOn === "cosmonaut") {
    await workWithDataPeople();
    
  } else {
    await workWithSpaceships();
  }
});

async function workWithDataPeople() {
  try {
    const peopleData = await getDataPeople();
    showHideNavButtons(peopleData);
    printTablePeople(peopleData);

  } catch (error) {
    console.error(error);
  }
}


//spaceships
function printTableSpaceships(data) {
  //funkcija za podatoci vo spaceships
  loader.setAttribute("hidden", true);
  tableBody.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    tableBody.innerHTML += `
      <tr>
        <td>${data.results[i].name}</td>
        <td>${data.results[i].model}</td>
        <td>${data.results[i].manufacturer}</td>
        <td>${data.results[i].cost_in_credits}</td>
        <td>${data.results[i].cargo_capacity}</td>
        <td>${data.results[i].starship_class}</td>
      </tr>
      `;
  }
}

async function getDataSpaceShips() {
  try {
    const response = await fetch(spaceShipsUrl + currentPage);
    const data = await response.json();
    console.log(data);

    return data;

  } catch (error) {
    console.log(error);
  }
}

async function workWithSpaceships() {
  try {
    const spaceShipsData = await getDataSpaceShips();
    showHideNavButtons(spaceShipsData);
    printTableSpaceships(spaceShipsData);

  } catch (error) {
    console.log(error);
  }
}

buttonS.addEventListener("click", async ()=> {
  workingOn = "spaceship"
  currentPage = 1;
  tableHead.innerHTML = `
     <tr id="yellowHeader">
        <td>Name</td>
        <td>Model</td>
        <td>Manifacturer</td>
        <td>Cost</td>
        <td>Capacity</td>
        <td>Class</td>
      </tr>
      `;
  tableBody.innerHTML = "";

  await workWithSpaceships();
});