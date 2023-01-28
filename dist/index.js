"use strict";
window.addEventListener('load', () => {
    var _a;
    screenTopSpan = document.getElementById('screen-top');
    screenBottomSpan = document.getElementById('screen-bottom');
    document.querySelectorAll('.number-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            addNumber(btn.innerHTML);
        });
    });
    document.querySelectorAll('.equation-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            equateOldAndCurrent(btn.innerHTML);
        });
    });
    (_a = document.getElementById('equal')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        equateResult();
    });
});
let screenTopSpan;
let screenBottomSpan;
let oldNumber;
let currentNumber;
let latestEquation;
function addNumber(number) {
    if (screenBottomSpan != undefined) {
        if (currentNumber === 0) {
            screenBottomSpan.innerHTML = number;
        }
        else {
            screenBottomSpan.innerHTML += number;
        }
        currentNumber = parseFloat(screenBottomSpan.innerHTML);
    }
}
function equateOldAndCurrent(equation) {
    if (screenTopSpan != undefined && screenBottomSpan != undefined) {
        if (oldNumber != undefined) {
            equateNumbers();
        }
        else {
            oldNumber = currentNumber;
        }
        currentNumber = 0;
        latestEquation = equation;
        screenTopSpan.innerHTML = oldNumber + ' ' + latestEquation;
        screenBottomSpan.innerHTML = currentNumber.toString();
    }
}
function equateNumbers() {
    if (latestEquation === '+') {
        oldNumber += currentNumber;
    }
    else if (latestEquation === '-') {
        oldNumber -= currentNumber;
    }
    else if (latestEquation === 'x') {
        oldNumber *= currentNumber;
    }
    else if (latestEquation === '/') {
        oldNumber /= currentNumber;
    }
}
function equateResult() {
    if (screenTopSpan != undefined && screenBottomSpan != undefined) {
        screenTopSpan.innerHTML =
            oldNumber + ' ' + latestEquation + ' ' + currentNumber;
        equateNumbers();
        screenBottomSpan.innerHTML = oldNumber.toString();
        currentNumber = 0;
    }
}
//# sourceMappingURL=index.js.map