function getRandomArbitrary(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomArray(n) {
    var arr = [];
    while (arr.length < n) {
        let number = getRandomArbitrary(25, 200);
        if (!arr.includes(number)) {
            // to make sure array containts distinct elements
            arr.push(number);
        }
    }
    return arr;
}


function setSteps(steps, algoName, algoDescription) {
    var element = document.getElementById("step-container");
    var ul = element.querySelector("ul");
    ul.innerHTML = "";
    var h3 = element.querySelector("h3");
    h3.textContent = algoName;
    var p = element.querySelector("p");
    p.textContent = algoDescription;
    steps.forEach((step) => {
        var li = document.createElement("li");
        li.textContent = step;
        ul.appendChild(li);
    });
}

function highlightStep(idx) {
    var element = document.getElementById("step-container");
    var ul = element.querySelector("ul");
    var li = ul.children[idx];
    li.style.opacity = "1";
}

function unhighlightAllSteps(){
    var element = document.getElementById("step-container");
    var ul = element.querySelector("ul");
    for (var i = 0; i < ul.children.length; i++){
        ul.children[i].style.opacity = ".5";
    }
}

export { getRandomArray, setSteps, highlightStep, unhighlightAllSteps};