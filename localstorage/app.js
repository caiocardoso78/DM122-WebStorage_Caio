const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
event.preventDefault();
const form = event.target;
const formData = {
};
console.log({formData});
window.localStorage.setItem(form.key.value,form.value.value);
    form.reset();
    form.key.focus();
readFromStorage();
});
function readFromStorage(){
    document.querySelector('output').innerHTML  += Object.keys(window.localStorage)
    .map(htmlTemplate)
    .join("");
}

function htmlTemplate(key){
    const value=window.localStorage.getItem(key);
    return `
    <span>${key}<\span>
    <span>${value}<\span>
     `;
}
readFromStorage();
