const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
event.preventDefault();
const form = event.target;
const formData = {
};
console.log({formData});
window.localStorageç.setItem('key', form.key.value);
window.localStorage.setItem('value', form.value.value);
readFromStorage();
});

function readFromStorage(){
    const key = window.localStorage.getItem('key');
    const value = window.localStorage.getItem('value');
    document.querySelector('output')
    .textContent = JSON.stringify( {key, value}, null, 2);
}
readFromStorage();
