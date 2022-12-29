const saveEl = document.getElementById('save-el');
const countEl = document.getElementById('count-el');
const saveElInitialTextContent = saveEl.textContent;
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count; 
}

function save() {
    saveEl.textContent += saveEl.textContent == saveElInitialTextContent ? count : ` - ${count}`;
    countEl.textContent = 0;
    count = 0;
}
