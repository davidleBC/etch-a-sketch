let contain = document.querySelector('#container');

for (let i = 0; i <16; i++) {
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
    let size = prompt('How many tiles would you like?');

    for (let i = 0; i <16; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        contain.appendChild(newDiv);
    };

/*    for (i = 0; i < boxColor.length * boxColor.length; i++) {
        boxColor[i].style.width = (100/size) + "%";
        };
*/
    });

