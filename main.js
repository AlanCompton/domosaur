let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = '40px'

let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.background = 'green';

let hiddenDino = document.querySelector('#hide-me');
hiddenDino.style.display = 'none';

let firstDino = document.querySelector('#triceratops');
firstDino.style.width = '324px';

spanMess.addEventListener('click',function(){
    spanMess.style.color = "orange";
});

firstDino.addEventListener('click',function(){
    firstDino.style.border = '3px solid red'
});

let row = document.querySelector('#row');
let switchColorButton = document.querySelector('#toggle');

switchColorButton.addEventListener('click',function(){
    console.log('TESTING BUTTON!');

    if(row.style.background === ''){
        row.style.background = 'purple';
    }else if(row.style.background === 'purple'){
        row.style.background = '';
    }
});

let biggify = document.querySelector('#biggify');

biggify.addEventListener('mouseover',function(){
    let biggify = document.querySelector('#biggify');
    biggify.height = 200;
    biggify.width = 200;
});