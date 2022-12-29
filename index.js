const saveEl = document.getElementById('save-el');
const countEl = document.getElementById('count-el');
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count; 
}

function save() {
    let countStr = ' - ' + count;
    saveEl.textContent += saveEl.textContent != '' ? count : countStr;;
    countEl.textContent = 0;
    count = 0;
}
