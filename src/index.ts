window.addEventListener('load', () => {
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

  document.getElementById('equal')?.addEventListener('click', () => {
    equateResult();
  });
});

let screenTopSpan: HTMLSpanElement | null;
let screenBottomSpan: HTMLSpanElement | null;

let oldNumber: number;
let currentNumber: number;
let latestEquation: string;

function addNumber(number: string) {
  if (screenBottomSpan != undefined) {
    if (currentNumber === 0) {
      screenBottomSpan.innerHTML = number;
    } else {
      screenBottomSpan.innerHTML += number;
    }
    currentNumber = parseFloat(screenBottomSpan.innerHTML);
  }
}

function equateOldAndCurrent(equation: string) {
  if (screenTopSpan != undefined && screenBottomSpan != undefined) {
    if (oldNumber != undefined) {
      equateNumbers();
    } else {
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
  } else if (latestEquation === '-') {
    oldNumber -= currentNumber;
  } else if (latestEquation === 'x') {
    oldNumber *= currentNumber;
  } else if (latestEquation === '/') {
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
