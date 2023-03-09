function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerHTML = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developer = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs");
  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Tecnologia: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName" + rowIndex, null, "techName");

  const expLabel = createLabel("Tempo de experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2anos", id1);

  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4anos", id2);

  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel3 = createLabel("+5 anos", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );
  stackInputs.append(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const fullNameInput = document.getElementById("fullName");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    // Selecionando um ID que é a linha, dentro da linha ele busca o techName
    const techName = document.querySelector(
      "#" + row.id + 'input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + 'input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullName: fullNameInput.value, technologies };
  developer.push(newDev);
  alert("Dev cadastrado!");
  fullNameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });
  console.log(developer);
});
