const chosenSiWeek = document.getElementById("select-si-week");
const investedHours = document.getElementById("hours");
const dateControl = document.getElementById("date");
const investedHoursOutput = document.querySelector(
  ".invested-hours-si-week-one"
);
const displayTableWeekOne = document.getElementById(
  "displayDetails-si-week-one"
);
const displayTableWeekTwo = document.getElementById(
  "displayDetails-si-week-two"
);
const displayModul2 = document.querySelector(".modul2");

const tableWeekOne = document.getElementById("table-si-week-one");
const tableWeekTwo = document.getElementById("table-si-week-two");
// let hideSiWeekSection = document.querySelector(".hide");
let hideSiWeekSection = document.querySelectorAll(".hide");
let dataTable = document.getElementById("data-table-si-week-one");
let tableHeader = document.querySelector(".tableHeader-day");

let SIWEEKONE;
let hoursCollection = [];

//check error document is not defined
if (typeof window !== "undefined") {
  console.log("You are on the browser");
} else {
  console.log("You are on the server");
}

window.addEventListener("load", () => {
  SIWEEKONE = JSON.parse(localStorage.getItem("data"));

  if (SIWEEKONE === null) {
    SIWEEKONE = [];
  } else {
    SIWEEKONE = JSON.parse(localStorage.getItem("data"));
    investedHoursOutput.innerHTML = localStorage.getItem(
      "investedHours-si-one"
    );
  }

  chosenSiWeek.addEventListener("change", (event) => {
    const data = {
      hours: investedHours.value,
      date: dateControl.value,
      siWeek: chosenSiWeek.value,
    };

    if (event.target.value === "1") {
      SIWEEKONE.push(data);
      localStorage.setItem("data", JSON.stringify(SIWEEKONE));
      drawTable();
    }

    let select_box = document.getElementById("select-si-week");
    select_box.selectedIndex = "Choose SI-Week";
    investedHours.value = "";
    dateControl.value = "";

    sumInvestedHours();
  });

  displayModul2.addEventListener("click", () => {
    hideSiWeekSection.forEach(function (siWeeks) {
      siWeeks.classList.toggle("hide");
      tableWeekOne.classList.toggle("hide");
    });
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
  localStorage.setItem("investedHours-si-one", JSON.stringify(result));
  investedHoursOutput.innerHTML = localStorage.getItem("investedHours-si-one");
}
function drawTable() {
  tableWeekOne.innerHTML = "";

  for (let data of SIWEEKONE) {
    const tableRow = document.createElement("tr");
    let cellDay = document.createElement("td");
    let cellHours = document.createElement("td");
    tableWeekOne.appendChild(tableRow);
    tableRow.appendChild(cellDay);
    tableRow.appendChild(cellHours);
    cellDay.innerHTML = data.date;
    cellDay.setAttribute("class", "day");
    cellHours.innerHTML = data.hours;
    cellHours.setAttribute("class", "hours");
  }
}

displayTableWeekOne.addEventListener("click", () => {
  console.log("Hi");
  tableWeekOne.classList.toggle("hide");
});

displayTableWeekTwo.addEventListener("click", () => {
  console.log("goodbuy");
});
