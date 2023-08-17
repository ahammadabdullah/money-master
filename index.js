function getInputValue(inputID) {
  const inputValue = document.getElementById(inputID);
  const inputValueString = inputValue.value;
  const inputValueInt = parseInt(inputValueString);
  return inputValueInt;
}

function setElement(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementValue(elementId) {
  const elementValue = document.getElementById(elementId);
  const elementValueString = elementValue.innerText;
  const elementValueInt = parseInt(elementValueString);
  return elementValueInt;
}

function calculateExpenses() {
  const income = getInputValue("income");
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");
  const totalExpense = food + rent + clothes;
  const balanceLeft = income - totalExpense;
  setElement("total-expenses", totalExpense);
  setElement("balance-left", balanceLeft);
}

function calculateSavingPercentage() {
  const savePercentage = getInputValue("percentage");
  const balanceLeft = getElementValue("balance-left");
  const savedAmount = (balanceLeft * savePercentage) / 100;
  const remainingAmount = balanceLeft - savedAmount;
  setElement("saving-amount", savedAmount);
  setElement("remaining-amount", remainingAmount);
}

function clearFieldByID(inputId){
  const field = document.getElementById(inputId);
  field.value = "";
}




function clearField(){
    clearFieldByID("income");
    clearFieldByID("food");
    clearFieldByID("rent");
    clearFieldByID("clothes");
    clearFieldByID('percentage')
}