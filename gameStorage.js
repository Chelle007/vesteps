function countSteps(stepsNeeded) {
    stepsTaken = localStorage.getItem("stepsTaken");
    availableSteps = localStorage.getItem("steps");

    if (stepsNeeded > availableSteps) {
        return false;
    }

    localStorage.setItem("steps", availableSteps - stepsNeeded);
    localStorage.setItem("stepsTaken", stepsTaken + stepsNeeded);
    return true;
}

function claimChest1(accessorry) {
    localStorage.setItem("skins", JSON.stringify(['none', 'bowtie', accessorry]));
}

function claimChest2() {
    localStorage.setItem("characters", JSON.stringify(['amongus', 'zombie amongus']));
}