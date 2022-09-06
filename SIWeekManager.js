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
