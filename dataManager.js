function saveData() {
  localStorage.setItem(`siWeeks`, JSON.stringify(SIWEEKS));
}

function getData() {
  return JSON.parse(localStorage.getItem(`siWeeks`));
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
