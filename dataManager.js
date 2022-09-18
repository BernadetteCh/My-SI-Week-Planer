function saveData() {
  localStorage.setItem(`siWeeks`, JSON.stringify(SIWEEKS));
}

function getData() {
  return JSON.parse(localStorage.getItem(`siWeeks`));
}
