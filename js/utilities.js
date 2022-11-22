function getElement(element) {
    let getElement = document.getElementById(element);
    let getElementString = getElement.value;
    let getElementNumber = parseFloat(getElementString);
    return getElementNumber;
}
function setElement(satElementValue, value) {
    let setValue = document.getElementById(satElementValue);
    setValue.innerText = value;
}
function playerExpenses() {
    let totalSelectedPlayer = document.getElementById('selected-player').children.length;
    let perPlayerBudget = getElement('budget-input-field-1');
    let playerExpenses = totalSelectedPlayer *  perPlayerBudget;
    return playerExpenses;
}