const chosenSiWeek = document.getElementById("si-week");
const investedHours = document.getElementById("hours");
const dateControl = document.getElementById("date");
const displayDetailsButton = document.getElementById("displayDetails");
let SIWEEKDATA = [];

function setSIWeekDataToLocalStorage(event) {
  const data = {
    hours: investedHours.value,
    date: dateControl.value,
    siWeek: chosenSiWeek.value,
  };

  SIWEEKDATA.push(data);
  localStorage.setItem("data", JSON.stringify(SIWEEKDATA));
  chosenSiWeek.value = "Choose SI-Week";
}

chosenSiWeek.addEventListener("change", setSIWeekDataToLocalStorage);

displayDetailsButton.addEventListener("click", () => {
  SIWEEKDATA = JSON.parse(localStorage.getItem("data"));
  const table = document.getElementById("table");
  const tableRow = document.createElement("tr");
  const cellDay = document.createElement("td");
  const cellHours = document.createElement("td");

  for (let data of SIWEEKDATA) {
    table.appendChild(tableRow);
    tableRow.appendChild(cellDay);
    tableRow.appendChild(cellHours);
    cellDay.innerHTML = data.date;
    cellHours.innerHTML = data.hours;
  }
});
