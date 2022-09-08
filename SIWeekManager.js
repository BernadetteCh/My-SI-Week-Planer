const chosenSiWeek = document.getElementById("select-si-week");
const investedHours = document.getElementById("hours");
const dateControl = document.getElementById("date");
const investedHoursOutput = document.querySelector(".invested-hours");
const displayDetailsButton = document.getElementById("displayDetails");
const displayModul2 = document.querySelector(".modul2");
const table = document.getElementById("table");
let hideSiWeekSection = document.querySelector(".hide");
let dataTable = document.getElementById("data-table");
let tableHeader = document.querySelector(".tableHeader-day");

let SIWEEKDATA;
let hoursCollection = [];

//check error document is not defined
if (typeof window !== "undefined") {
  console.log("You are on the browser");
} else {
  console.log("You are on the server");
}

window.addEventListener("load", () => {
  SIWEEKDATA = JSON.parse(localStorage.getItem("data"));

  if (SIWEEKDATA === null) {
    SIWEEKDATA = [];
  } else {
    SIWEEKDATA = JSON.parse(localStorage.getItem("data"));
    investedHoursOutput.innerHTML = localStorage.getItem("investedHours");
  }

  chosenSiWeek.addEventListener("change", (event) => {
    const data = {
      hours: investedHours.value,
      date: dateControl.value,
      siWeek: chosenSiWeek.value,
    };

    if (event.target.value === "1") {
      SIWEEKDATA.push(data);
      localStorage.setItem("data", JSON.stringify(SIWEEKDATA));
      drawTable();
    }

    let select_box = document.getElementById("select-si-week");
    select_box.selectedIndex = "Choose SI-Week";
    investedHours.value = "";

    sumInvestedHours();
    // location.reload();
  });
  displayModul2.addEventListener("click", () => {
    hideSiWeekSection.classList.toggle("hide");
  });

  drawTable();
});

function sumInvestedHours() {
  let hours = document.getElementsByClassName("hours");
  let collectionOFHours = [];
  let result = 0;
  for (let hour of hours) {
    console.log(hour);
    collectionOFHours.push(+hour.innerHTML);
  }
  for (let hour of collectionOFHours) {
    result = result + hour;
  }
  console.log(result);
  localStorage.setItem("investedHours", JSON.stringify(result));
  investedHoursOutput.innerHTML = localStorage.getItem("investedHours");
}
function drawTable() {
  table.innerHTML = "";

  for (let data of SIWEEKDATA) {
    const tableRow = document.createElement("tr");
    let cellDay = document.createElement("td");
    let cellHours = document.createElement("td");
    table.appendChild(tableRow);
    tableRow.appendChild(cellDay);
    tableRow.appendChild(cellHours);
    cellDay.innerHTML = data.date;
    cellDay.setAttribute("class", "day");
    cellHours.innerHTML = data.hours;
    cellHours.setAttribute("class", "hours");
  }
}
displayDetailsButton.addEventListener("click", () => {
  table.classList.toggle("hide");
});
