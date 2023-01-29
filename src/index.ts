window.addEventListener('load', () => {
  screenTopSpan = document.getElementById('screen-top');
  screenBottomSpan = document.getElementById('screen-bottom');

  currentNumber = 0;
  if (screenBottomSpan != undefined) {
    screenBottomSpan.innerHTML = currentNumber.toString();
  }

  document.querySelectorAll('.number-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      addNumber(btn.innerHTML);
    });
  });

  document.getElementById('decimal')?.addEventListener('click', () => {
    addDecimal();
  });

  document.querySelectorAll('.equation-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      equateOldAndCurrent(btn.innerHTML);
    });
  });

  document.getElementById('equal')?.addEventListener('click', () => {
    equateResult();
  });

  document.getElementById('ac')?.addEventListener('click', () => {
    allClear();
  });

  document.getElementById('ce')?.addEventListener('click', () => {
    clearEntry();
  });

  oldSpan = document.getElementById('old-span');
  currentSpan = document.getElementById('current-span');
  equationSpan = document.getElementById('equation-span');
});

let screenTopSpan: HTMLSpanElement | null;
let screenBottomSpan: HTMLSpanElement | null;

let oldNumber: number | undefined;
let currentNumber: number | undefined;
let latestEquation: string;

function addNumber(number: string) {
  if (screenBottomSpan != undefined && screenTopSpan != undefined) {
    if (screenBottomSpan.innerHTML === '0') {
      screenBottomSpan.innerHTML = number;
    } else if (currentNumber === undefined) {
      screenTopSpan.innerHTML = oldNumber?.toString() + ' ' + latestEquation;
      screenBottomSpan.innerHTML = number;
    } else {
      screenBottomSpan.innerHTML += number;
    }
    currentNumber = parseFloat(screenBottomSpan.innerHTML);
  }

  updateP();
}

function addDecimal() {
  if (screenBottomSpan != undefined) {
    console.log(screenBottomSpan.innerHTML.includes('.'));

    if (!screenBottomSpan.innerHTML.includes('.')) {
      screenBottomSpan.innerHTML += '.';
      currentNumber = parseFloat(screenBottomSpan.innerHTML);
    }
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

  updateP();
}

function equateNumbers(): boolean {
  if (oldNumber != undefined && currentNumber != undefined) {
    if (latestEquation === '+') {
      oldNumber += currentNumber;
    } else if (latestEquation === '-') {
      oldNumber -= currentNumber;
    } else if (latestEquation === 'x') {
      oldNumber *= currentNumber;
    } else if (latestEquation === '/') {
      oldNumber /= currentNumber;
      if (oldNumber === Infinity) {
        infinityError();
        return false;
      }
    }
    updateP();
    return true;
  }
  updateP();
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

  updateP();
}

function equateResult() {
  if (
    screenTopSpan != undefined &&
    screenBottomSpan != undefined &&
    oldNumber != undefined &&
    currentNumber != undefined
  ) {
    screenTopSpan.innerHTML =
      oldNumber + ' ' + latestEquation + ' ' + currentNumber;
    if (equateNumbers() === true) {
      screenBottomSpan.innerHTML = oldNumber.toString();
      currentNumber = undefined;
    }
  }

  updateP();
}

function allClear() {
  oldNumber = undefined;
  currentNumber = 0;
  latestEquation = '';

  if (
    screenTopSpan != undefined &&
    screenBottomSpan != undefined &&
    currentNumber != undefined
  ) {
    screenTopSpan.innerHTML = '';
    screenBottomSpan.innerHTML = currentNumber.toString();
  }

  updateP();
}

function clearEntry() {
  if (screenBottomSpan != undefined) {
    currentNumber = 0;
    screenBottomSpan.innerHTML = currentNumber.toString();
  }
}

let oldSpan: HTMLSpanElement | null;
let currentSpan: HTMLSpanElement | null;
let equationSpan: HTMLSpanElement | null;

function updateP() {
  if (oldSpan != undefined) {
    if (oldNumber != undefined) {
      oldSpan.innerHTML = oldNumber.toString();
    } else {
      oldSpan.innerHTML = 'undefined';
    }
  }
  if (currentSpan != undefined) {
    if (currentNumber != undefined) {
      currentSpan.innerHTML = currentNumber.toString();
    } else {
      currentSpan.innerHTML = 'undefined';
    }
  }
  if (equationSpan != undefined) {
    if (latestEquation != undefined) {
      equationSpan.innerHTML = latestEquation;
    }
  }
}
