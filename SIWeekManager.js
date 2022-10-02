const chosenSiWeek = document.getElementById("select-si-week");
const investedHours = document.getElementById("hours");
const dateControl = document.getElementById("date");
const investedHoursOutput = document.querySelector(
  ".invested-hours-si-week-one"
);
const investedHoursOutputWeekTwo = document.querySelector(
  ".invested-hours-si-week-two"
);

const investedHoursOutputWeekThree = document.querySelector(
  ".invested-hours-si-week-three"
);
const investedHoursOutputWeekFour = document.querySelector(
  ".invested-hours-si-week-four"
);
const investedHoursOutputWeekFive = document.querySelector(
  ".invested-hours-si-week-five"
);
const displayTableWeekOne = document.getElementById(
  "displayDetails-si-week-one"
);
const displayTableWeekTwo = document.getElementById(
  "displayDetails-si-week-two"
);
const displayTableWeekThree = document.getElementById(
  "displayDetails-si-week-three"
);
const displayTableWeekFour = document.getElementById(
  "displayDetails-si-week-four"
);
const displayTableWeekFive = document.getElementById(
  "displayDetails-si-week-five"
);
const displayModul2 = document.querySelector(".modul2");

const tableWeekOne = document.getElementById("table-si-week-one");
const tableWeekTwo = document.getElementById("table-si-week-two");
const tableWeekThree = document.getElementById("table-si-week-three");
const tableWeekFour = document.getElementById("table-si-week-four");
const tableWeekFive = document.getElementById("table-si-week-five");
// let hideSIWEEKS[currentSiWeek]ection = document.querySelector(".hide");
let hideSiWeekSection = document.querySelectorAll(".hide");
let dataTable = document.getElementById("data-table-si-week-one");
let tableHeader = document.querySelector(".tableHeader-day");

let SIWEEKS = [];
let hoursCollection = [];

//check error document is not defined
if (typeof window !== "undefined") {
  console.log("You are on the browser");
} else {
  console.log("You are on the server");
}

window.addEventListener("load", () => {
  SIWEEKS = getData();

  if (SIWEEKS === null) {
    SIWEEKS = [];
  }

  chosenSiWeek.addEventListener("change", (event) => {
    let index = +event.target.value - 1;
    if (SIWEEKS[index] === undefined || SIWEEKS[index] === null) {
      SIWEEKS[index] = {
        investedHours: 0,
        days: [],
      };
    }

    const data = {
      hours: investedHours.value,
      date: dateControl.value,
      siWeek: chosenSiWeek.value,
    };

    SIWEEKS[index].days.push(data);
    saveData(index);
    //drawTable(index);

    if (index === 0) {
      sumInvestedHours(index);
      drawTable(0);
    }
    if (index === 1) {
      sumInvestedHours(index);
      drawTable(1);
    }
    if (index === 2) {
      sumInvestedHours(index);
      drawTable(2);
    }
    if (index === 3) {
      sumInvestedHours(index);
      drawTable(3);
    }
    if (index === 4) {
      sumInvestedHours(index);
      drawTable(4);
    }

    let select_box = document.getElementById("select-si-week");
    select_box.selectedIndex = "Choose SI-Week";
    investedHours.value = "";
    dateControl.value = "";

    sumInvestedHours(index);
  });

  displayModul2.addEventListener("click", () => {
    hideSiWeekSection.forEach(function (siweeks) {
      siweeks.classList.toggle("hide");
      tableWeekOne.classList.toggle("hide");
    });
    // for (let i = 0; i < SIWEEKS.length; i++) {
    //   console.log(i);
    //   drawTable(i);
    // }
  });

  if (SIWEEKS[0] === null || SIWEEKS[0] === undefined) {
    investedHoursOutput.innerHTML = "";
  } else {
    investedHoursOutput.innerHTML = SIWEEKS[0].investedHours;
  }

  if (SIWEEKS[1] === null || SIWEEKS[1] === undefined) {
    investedHoursOutputWeekTwo.innerHTML = "";
  } else {
    investedHoursOutputWeekTwo.innerHTML = SIWEEKS[1].investedHours;
  }

  if (SIWEEKS[2] === null || SIWEEKS[2] === undefined) {
    investedHoursOutputWeekThree.innerHTML = "";
  } else {
    investedHoursOutputWeekThree.innerHTML = SIWEEKS[2].investedHours;
  }

  if (SIWEEKS[3] === null || SIWEEKS[3] === undefined) {
    investedHoursOutputWeekFour.innerHTML = "";
  } else {
    investedHoursOutputWeekFour.innerHTML = SIWEEKS[3].investedHours;
  }
  if (SIWEEKS[4] === null || SIWEEKS[4] === undefined) {
    investedHoursOutputWeekFive.innerHTML = "";
  } else {
    investedHoursOutputWeekFive.innerHTML = SIWEEKS[4].investedHours;
  }

  // for (let i = 0; i < SIWEEKS.length; i++) {
  //   console.log(i);
  //   drawTable(i);
  // }
});

function sumInvestedHours(index) {
  let json = JSON.parse(window.localStorage.getItem("siWeeks"));

  let collectionOFHours = [];
  let result = 0;
  for (let hour of json[index].days) {
    console.log(+hour.hours);
    collectionOFHours.push(+hour.hours);
  }

  for (let hour of collectionOFHours) {
    result = result + hour;
  }

  SIWEEKS[index].investedHours = result;
  saveData(SIWEEKS[index]);

  if (index === 0) {
    investedHoursOutput.innerHTML = getData()[index].investedHours;
  } else if (index === 1) {
    investedHoursOutputWeekTwo.innerHTML = getData()[index].investedHours;
  } else if (index === 2) {
    investedHoursOutputWeekThree.innerHTML = getData()[index].investedHours;
  } else if (index === 3) {
    investedHoursOutputWeekFour.innerHTML = getData()[index].investedHours;
  } else if (index === 4) {
    investedHoursOutputWeekFive.innerHTML = getData()[index].investedHours;
  }

  console.log(JSON.parse(window.localStorage.getItem("siWeeks")));
}
//function draw table

displayTableWeekOne.addEventListener("click", () => {
  tableWeekOne.classList.toggle("hide");
  drawTable(0);
});

displayTableWeekTwo.addEventListener("click", () => {
  tableWeekTwo.classList.toggle("hide");
  drawTable(1);
});

displayTableWeekThree.addEventListener("click", () => {
  tableWeekThree.classList.toggle("hide");
  drawTable(2);
});

displayTableWeekFour.addEventListener("click", () => {
  tableWeekFour.classList.toggle("hide");
  drawTable(3);
});

displayTableWeekFive.addEventListener("click", () => {
  tableWeekFive.classList.toggle("hide");
  drawTable(4);
});
