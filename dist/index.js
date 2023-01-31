"use strict";
window.addEventListener('load', () => {
    var _a, _b, _c, _d;
    screenTopSpan = document.getElementById('screen-top');
    screenBottomSpan = document.getElementById('screen-bottom');
    currentNumber = 0;
    if (screenBottomSpan != undefined) {
        screenBottomSpan.innerHTML = currentNumber.toString();
    }
    document.querySelectorAll('#calculator button').forEach((btn) => {
        btn.addEventListener('mousedown', () => {
            playClickDown();
        });
        btn.addEventListener('mouseup', () => {
            playClickUp();
        });
    });
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (parseInt(event.key)) {
            playClickDown();
            addNumber(key);
        }
        else if (key === ',' || key === '.') {
            playClickDown();
            addDecimal();
        }
        else if (key === '=' || key === 'Enter') {
            playClickDown();
            equateResult();
        }
        else if (key === '+' ||
            key === '-' ||
            key === 'x' ||
            key === '*' ||
            key === '/') {
            playClickDown();
            if (key === '*') {
                equateOldAndCurrent('x');
            }
            else {
                equateOldAndCurrent(key);
            }
        }
        else if (key === 'Delete') {
            playClickDown();
            allClear();
        }
        else if (key === 'Backspace') {
            playClickDown();
            clearEntry();
        }
    });
    document.addEventListener('keyup', function (event) {
        const key = event.key;
        if (parseInt(key) ||
            key === ',' ||
            key === '.' ||
            key === '=' ||
            key === 'Enter' ||
            key === '+' ||
            key === '-' ||
            key === 'x' ||
            key === '*' ||
            key === '/' ||
            key === 'Delete' ||
            key === 'Backspace') {
            playClickUp();
        }
    });
    (_a = document.getElementById('ac')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        allClear();
    });
    (_b = document.getElementById('ce')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        clearEntry();
    });
    document.querySelectorAll('.number-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            addNumber(btn.innerHTML);
        });
    });
    (_c = document.getElementById('decimal')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        addDecimal();
    });
    (_d = document.getElementById('equal')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        equateResult();
    });
    document.querySelectorAll('.equation-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            equateOldAndCurrent(btn.innerHTML);
        });
    });
});
const btnClickSoundDown = new Audio('./sounds/btn-click-sound-down.mp3');
const btnClickSoundUp = new Audio('./sounds/btn-click-sound-up.mp3');
function playClickDown() {
    btnClickSoundDown.pause();
    btnClickSoundDown.currentTime = 0;
    btnClickSoundDown.play();
}
function playClickUp() {
    btnClickSoundUp.pause();
    btnClickSoundUp.currentTime = 0;
    btnClickSoundUp.play();
}
let screenTopSpan;
let screenBottomSpan;
let oldNumber;
let currentNumber;
let latestEquation;
function allClear() {
    oldNumber = undefined;
    currentNumber = 0;
    latestEquation = '';
    if (screenTopSpan != undefined &&
        screenBottomSpan != undefined &&
        currentNumber != undefined) {
        screenTopSpan.innerHTML = '';
        screenBottomSpan.innerHTML = currentNumber.toString();
    }
}
function clearEntry() {
    if (screenBottomSpan != undefined) {
        currentNumber = 0;
        screenBottomSpan.innerHTML = currentNumber.toString();
    }
}
function addNumber(number) {
    if (screenBottomSpan != undefined && screenTopSpan != undefined) {
        if (screenBottomSpan.innerHTML === '0') {
            screenBottomSpan.innerHTML = number;
        }
        else if (currentNumber === undefined) {
            screenTopSpan.innerHTML = (oldNumber === null || oldNumber === void 0 ? void 0 : oldNumber.toString()) + ' ' + latestEquation;
            screenBottomSpan.innerHTML = number;
        }
        else {
            screenBottomSpan.innerHTML += number;
        }
        currentNumber = parseFloat(screenBottomSpan.innerHTML);
    }
}
function addDecimal() {
    if (screenTopSpan != undefined && screenBottomSpan != undefined) {
        if (currentNumber === undefined) {
            screenTopSpan.innerHTML = (oldNumber === null || oldNumber === void 0 ? void 0 : oldNumber.toString()) + ' ' + latestEquation;
            screenBottomSpan.innerHTML = '0.';
            currentNumber = parseFloat(screenBottomSpan.innerHTML);
        }
        else if (!screenBottomSpan.innerHTML.includes('.')) {
            screenBottomSpan.innerHTML += '.';
            currentNumber = parseFloat(screenBottomSpan.innerHTML);
        }
    }
}
function equateResult() {
    if (screenTopSpan != undefined &&
        screenBottomSpan != undefined &&
        oldNumber != undefined &&
        currentNumber != undefined) {
        screenTopSpan.innerHTML =
            oldNumber + ' ' + latestEquation + ' ' + currentNumber + ' =';
        if (equateNumbers() === true) {
            screenBottomSpan.innerHTML = oldNumber.toString();
            currentNumber = undefined;
        }
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
    if (oldNumber != undefined && currentNumber != undefined) {
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
            if (oldNumber === Infinity) {
                infinityError();
                return false;
            }
        }
        return true;
    }
    return false;
}
function infinityError() {
    if (screenTopSpan != undefined && screenBottomSpan != undefined) {
        oldNumber = undefined;
        currentNumber = undefined;
        latestEquation = '';
        screenTopSpan.innerHTML = '';
        screenBottomSpan.innerHTML = 'Error';
    }
}
//# sourceMappingURL=index.js.map