
function createOptionsOfStates() {
  const statesList = document.getElementById('state');
  const stateOptions = ['Select your State', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let value
  for (let elem in stateOptions) {
    const optionOfState = document.createElement('option');
    statesList.appendChild(optionOfState).innerText = stateOptions[elem];
    statesList.appendChild(optionOfState).value = stateOptions[elem];
  }
}

window.onload = function () {
  createOptionsOfStates();
}
