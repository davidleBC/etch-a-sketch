let contain = document.querySelector('#container');

let size = 2;

for (let i = 0; i < size*size; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    contain.appendChild(newDiv);
};

let boxColor = document.querySelectorAll('.box');

for (i = 0; i < boxColor.length; i++) {
    boxColor[i].addEventListener('mouseenter',function(e) {
    e.target.style.backgroundColor = 'black';
    });
};

let btnQuery = document.querySelector('button');

btnQuery.addEventListener('click', function(e) {

    let boxColor2 = document.querySelectorAll('.box')
    
    for (let i = 0; i < size*size; i++) {
        contain.removeChild(boxColor2[i]);
    };

    size = prompt('How many tiles would you like?');

    for (let j = 0; j < size * size; j++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        contain.appendChild(newDiv);
        let newBoxSize = 100/size;
        let boxColor1 = document.querySelectorAll('.box');
        boxColor1[j].style.width = `${newBoxSize}%`;
        
        boxColor1[j].addEventListener('mouseenter',function(e) {
            e.target.style.backgroundColor = 'black';
            });
        
        };

    });