

let text = ['Learn With Sumon','Hyper text marcup languege(HTML)','Cinthetic Style sheet (CSS)','Javascript & Others'];
let count = 0;
let index = 0;
let currentText = 0;
let letter = 0;

setInterval(() => {
    currentText = text[count];

    letter = currentText.slice(0,index++);
    // console.log(currentText);
    let place = document.querySelector('h1');
    place.innerHTML = letter
    if(letter.length === currentText.length){
        count++;
        // console.log(count);
        index = 0;
    }
    if(count === text.length){
        count = 0;
    }


},100)