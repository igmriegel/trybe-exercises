
function createOptionsOfStates() {
  const statesList = document.getElementById('state');
  const stateOptions = ['Select your State', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let elem in stateOptions) {
    const optionOfState = document.createElement('option');
    statesList.appendChild(optionOfState).innerText = stateOptions[elem];
    statesList.appendChild(optionOfState).value = stateOptions[elem];
  }
}

window.onload = function () {
  createOptionsOfStates();
}

function validateDate(date) {
  let dateIsValid = false;
  let dayInput = parseInt(date.substring(0,2));
  let monthInput = parseInt(date.substring(3,5));
  let yearInput = parseInt(date.substring(6));
  if((dayInput > 0 && dayInput <= 31) && (monthInput > 0 && monthInput <= 12) && (yearInput > 0)) {
    dateIsValid = true;
  } else {
    alert("Please insert a Valid date using the following format dd/mm/yyyy.")
  }
  return dateIsValid;
}

const submitBtn = document.getElementById('submit-btn');

function displayInputedFormData() {
  let typedDate = document.getElementById("Job-Starting-Date").value
  if (validateDate(typedDate)) {
    let inputData = document.getElementsByTagName('input');
    for (let index = 0; index < inputData.length; index += 1) {
      const displaySection = document.getElementById('display-form-data');
      let newDiv = document.createElement('DIV');
      let inputString = `${inputData[index].name}: ${inputData[index].value}`;
      newDiv.innerText = inputString;
      newDiv.className = 'input-data-display';
      displaySection.appendChild(newDiv);
    }
  }
}

const resetBtn = document.getElementById('reset-btn');

function clearFormAndDisplay() {
  let historyOfTypedData = document.getElementsByClassName('input-data-display');
  while(historyOfTypedData.length > 0) {
    historyOfTypedData[0].remove()
  }
}

resetBtn.addEventListener('click', function () {
  clearFormAndDisplay();
})

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  displayInputedFormData();
})
