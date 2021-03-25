const selectSX = document.getElementById("selectSX");
const selectDX = document.getElementById("selectDX");

function setSelected() {
  if (
    selectSX.options[selectSX.selectedIndex].getAttribute("selected") != true
  ) {
    selectSX.options[selectSX.selectedIndex].setAttribute("selected", "true");
  } else {
    selectSX.options[selectSX.selectedIndex].setAttribute("selected", "false");
  }
}

function createOption() {
  return document.createElement("option");
}

function selezionaElemento() {
  let valIndex = selectSX.options[selectSX.selectedIndex].value;

  let createOptionSelect = createOption();
  let createNode = document.createTextNode(valIndex);

  createOptionSelect.appendChild(createNode);

  createOptionSelect.setAttribute("id", valIndex);
  createOptionSelect.setAttribute("value", valIndex);

  selectDX.appendChild(createOptionSelect);

  selectSX.options[selectSX.selectedIndex].remove();
}

function rimuoviElemento() {
  let valIndex = selectDX.options[selectDX.selectedIndex].value;

  let createOptionSelect = createOption();
  let createNode = document.createTextNode(valIndex);

  createOptionSelect.appendChild(createNode);

  createOptionSelect.setAttribute("id", valIndex);
  createOptionSelect.setAttribute("value", valIndex);

  selectSX.appendChild(createOptionSelect);

  document.getElementById("selectDX").options[selectDX.selectedIndex].remove();
}

function selezionaTutti() {
  var allOptions = selectSX.options;

  for (var i in allOptions) {
    let createOptionSelect = createOption();
    let valIndex = allOptions[0].value;

    let createNode = document.createTextNode(valIndex);

    createOptionSelect.appendChild(createNode);

    createOptionSelect.setAttribute("id", valIndex);
    createOptionSelect.setAttribute("value", valIndex);

    selectDX.appendChild(createOptionSelect);

    allOptions.remove(valIndex);
  }
}

function rimuoviTutti() {
  var allOptions = selectDX.options;

  for (var i in allOptions) {
    let createOptionSelect = createOption();
    let valIndex = allOptions[0].value;

    let createNode = document.createTextNode(valIndex);

    createOptionSelect.appendChild(createNode);

    createOptionSelect.setAttribute("id", valIndex);
    createOptionSelect.setAttribute("value", valIndex);

    selectSX.appendChild(createOptionSelect);

    allOptions.remove(valIndex);
  }
}
