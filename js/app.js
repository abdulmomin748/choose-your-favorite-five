// player selection 
let totalPlayer = 0;
function selectplayer(player) {
    let playerName = player.parentNode.children[0].innerText;
    let selected = player.parentNode.children[2];
    console.log(selected);
    if (totalPlayer === 5) {
        alert('Adding more players is not allowed');
        return;
    }
    totalPlayer++;
    player.disabled = true;
    if(player.disabled  == true){
        selected.innerText = 'Selected';
    }
    else { 
        selected.innerText = 'Select';
    }
    let playerList = document.getElementById('selected-player');
    const li = document.createElement('li');
    li.innerText = `${playerName}`;
    playerList.appendChild(li); 
}

// player budget calculate
document.getElementById('btn-calculate').addEventListener('click', function() {
    let totalPlayerBudget = playerExpenses();
    let perPlayerBudget = getElement('budget-input-field-1');
    let totalSelectedPlayer = document.getElementById('selected-player').children.length;
    if (totalSelectedPlayer === 0) {
        alert('Plz Select the player first');
        return;
    }
    else if (isNaN(perPlayerBudget) || perPlayerBudget < 0 || perPlayerBudget === 0) {
        alert('Inter Valid Number');
        return;
    }
    setElement('player-expenses', totalPlayerBudget);
})

// calculate total
document.getElementById('btn-calculate-total').addEventListener('click', function() {
    let totalPlayerBudget = playerExpenses();
    console.log(totalPlayerBudget);
    let managerBudget = getElement('budget-input-field-2');
    let coachBudget = getElement('budget-input-field-3');
    let total = totalPlayerBudget + managerBudget + coachBudget;
    if (totalPlayerBudget === 0 || isNaN(totalPlayerBudget)) {
        alert('At First select the player budget');
        return;
    }
    else if (isNaN(managerBudget) || managerBudget < 0 || managerBudget === 0 || isNaN(coachBudget) || coachBudget < 0 || coachBudget === 0) {
        alert('Enter Valid Number')
        return;
    }
    setElement('calculate-total', total);
})
