"use strict";
window.addEventListener('load', () => {
    screenBottom = document.getElementById('screen-bottom');
    const numberButtons = (document.querySelectorAll('.number-btn'));
    numberButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            addNumber(parseInt(btn.innerHTML));
        });
    });
});
let screenBottom;
let screenBottomValue;
function addNumber(number) {
    console.log(number);
    if (screenBottom != undefined) {
        screenBottom.innerHTML = number.toString() + screenBottom.innerHTML;
    }
}
//# sourceMappingURL=index.js.map