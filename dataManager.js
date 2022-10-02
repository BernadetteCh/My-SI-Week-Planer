function saveData() {
  localStorage.setItem(`siWeeks`, JSON.stringify(SIWEEKS));
}
function getData() {
  return JSON.parse(localStorage.getItem(`siWeeks`));
}
function saveDataForPercentage(PERCENTAGE) {
  localStorage.setItem(`percentage`, JSON.stringify(PERCENTAGE));
}
function getDataForPercentage() {
  return JSON.parse(localStorage.getItem(`percentage`));
}
function displayPercentage() {
  if (PERCENTAGE[0] === null || PERCENTAGE[0] === undefined) {
    finishedInPercentageWeekOne.innerHTML = "";
  } else {
    finishedInPercentageWeekOne.innerHTML =
      PERCENTAGE[0]["finished-percent-week-1"] + "%";
  }

  if (PERCENTAGE[1] === null || PERCENTAGE[1] === undefined) {
    finishedInPercentageWeekTwo.innerHTML = "";
  } else {
    finishedInPercentageWeekTwo.innerHTML =
      PERCENTAGE[1]["finished-percent-week-2"] + "%";
  }

  if (PERCENTAGE[2] === null || PERCENTAGE[2] === undefined) {
    finishedInPercentageWeekThree.innerHTML = "";
  } else {
    finishedInPercentageWeekThree.innerHTML =
      PERCENTAGE[2]["finished-percent-week-3"] + "%";
  }

  if (PERCENTAGE[3] === null || PERCENTAGE[3] === undefined) {
    finishedInPercentageWeekFour.innerHTML = "";
  } else {
    finishedInPercentageWeekFour.innerHTML =
      PERCENTAGE[3]["finished-percent-week-4"] + "%";
  }

  if (PERCENTAGE[4] === null || PERCENTAGE[4] === undefined) {
    finishedInPercentageWeekFour.innerHTML = "";
  } else {
    finishedInPercentageWeekFour.innerHTML =
      PERCENTAGE[4]["finished-percent-week-5"] + "%";
  }
}

function drawTable(index) {
  console.log(index);

  tableWeekTwo.innerHTML = "";
  tableWeekOne.innerHTML = "";
  tableWeekThree.innerHTML = "";

  if (index === 0) {
    for (let day of SIWEEKS[index].days) {
      const tableRow = document.createElement("tr");
      let cellDay = document.createElement("td");
      let cellHours = document.createElement("td");
      tableWeekOne.appendChild(tableRow);
      tableRow.appendChild(cellDay);
      tableRow.appendChild(cellHours);
      cellDay.innerHTML = day.date;
      cellDay.setAttribute("class", "day");
      cellHours.innerHTML = day.hours;
      cellHours.setAttribute("class", "hours");
    }
  } else if (index === 1) {
    for (let day of SIWEEKS[index].days) {
      const tableRow2 = document.createElement("tr");
      let cellDay = document.createElement("td");
      let cellHours = document.createElement("td");
      tableWeekTwo.appendChild(tableRow2);
      tableRow2.appendChild(cellDay);
      tableRow2.appendChild(cellHours);
      cellDay.innerHTML = day.date;
      cellDay.setAttribute("class", "day");
      cellHours.innerHTML = day.hours;
      cellHours.setAttribute("class", "hours");
    }
  } else if (index === 2) {
    for (let day of SIWEEKS[index].days) {
      const tableRow3 = document.createElement("tr");
      let cellDay = document.createElement("td");
      let cellHours = document.createElement("td");
      tableWeekThree.appendChild(tableRow3);
      tableRow3.appendChild(cellDay);
      tableRow3.appendChild(cellHours);
      cellDay.innerHTML = day.date;
      cellDay.setAttribute("class", "day");
      cellHours.innerHTML = day.hours;
      cellHours.setAttribute("class", "hours");
    }
  } else if (index === 3) {
    tableWeekFour.innerHTML = "";
    for (let day of SIWEEKS[index].days) {
      const tableRow4 = document.createElement("tr");
      let cellDay = document.createElement("td");
      let cellHours = document.createElement("td");
      tableWeekFour.appendChild(tableRow4);
      tableRow4.appendChild(cellDay);
      tableRow4.appendChild(cellHours);
      cellDay.innerHTML = day.date;
      cellDay.setAttribute("class", "day");
      cellHours.innerHTML = day.hours;
      cellHours.setAttribute("class", "hours");
    }
  } else if (index === 4) {
    tableWeekFive.innerHTML = "";
    for (let day of SIWEEKS[index].days) {
      const tableRow5 = document.createElement("tr");
      let cellDay = document.createElement("td");
      let cellHours = document.createElement("td");
      tableWeekFive.appendChild(tableRow5);
      tableRow5.appendChild(cellDay);
      tableRow5.appendChild(cellHours);
      cellDay.innerHTML = day.date;
      cellDay.setAttribute("class", "day");
      cellHours.innerHTML = day.hours;
      cellHours.setAttribute("class", "hours");
    }
  }
}
