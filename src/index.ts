window.addEventListener('load', () => {
  /* const screen_top = document.getElementById('screen_top');
  const screen_bottom = document.getElementById('screen_bottom');
  const ac = document.getElementById('ac');
  const ec = document.getElementById('ec');
  const parentheses_left = document.getElementById('parentheses-left');
  const parentheses_right = document.getElementById('parentheses-right');
  const percent = document.getElementById('percent');
  const divide = document.getElementById('divide');
  const number_7 = document.getElementById('number-7');
  const number_8 = document.getElementById('number-8');
  const number_9 = document.getElementById('number-9');
  const multiply = document.getElementById('multiply');
  const number_4 = document.getElementById('number-4');
  const number_5 = document.getElementById('number-5');
  const number_6 = document.getElementById('number-6');
  const subtract = document.getElementById('subtract');
  const number_1 = document.getElementById('number-1');
  const number_2 = document.getElementById('number-2');
  const number_3 = document.getElementById('number-3');
  const add = document.getElementById('add');
  const number_0 = document.getElementById('number-0');
  const decimal = document.getElementById('decimal');
  const equal = document.getElementById('equal'); */

  screenBottom = document.getElementById('screen-bottom');

  const numberButtons = <NodeListOf<HTMLButtonElement>>(
    document.querySelectorAll('.number-btn')
  );

  numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      addNumber(parseInt(btn.innerHTML));
    });
  });
});

let screenBottom: HTMLSpanElement | null;
let screenBottomValue: string;

function addNumber(number: number) {
  console.log(number);

  if (screenBottom != undefined) {
    screenBottom.innerHTML = number.toString() + screenBottom.innerHTML;
  }
}
