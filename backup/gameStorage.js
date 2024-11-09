function countSteps(stepsNeeded) {
    let stepsTaken = parseInt(localStorage.getItem("stepsTaken"), 10);
    let availableSteps = parseInt(localStorage.getItem("steps"), 10);

    if (stepsNeeded > availableSteps) {
        return false;
    }

    localStorage.setItem("stepsTaken", stepsTaken + stepsNeeded);
    return true;
}

function claimChest1(accessorry) {
    localStorage.setItem("skins", JSON.stringify(['none', 'bowtie', accessorry]));
}

function claimChest2() {
    localStorage.setItem("characters", JSON.stringify(['amongus', 'zombie amongus']));
}