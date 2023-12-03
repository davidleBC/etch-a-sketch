let contain = document.querySelector('#container');

for (let i = 0; i <16; i++) {
    const newDiv = document.createElement('div');
    newDiv.textContent = "This worked!";
    contain.appendChild(newDiv)
};