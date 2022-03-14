


//  const big = document.querySelector('.article');

// function bigger() {
//    big.style.width = 100px;

// }

// function mouseOver() {
//     document.querySelector('.article').style.height = "400px";
//  }

// function blah(){
//  document.querySelector('.article').style.height = '200px'
// }

// const change = document.querySelector('.article')

const change = e => {
    const changed = document.querySelector('.article1');
    const blah = document.querySelector('.text1');
    const also = document.querySelector('.buttonArticle1');
    e.stopPropagation();
    blah.style.fontSize = '2em';
    blah.style.visibility= 'visible';
    also.textContent = 'Double-Click to Make Small';
    changed.style.height = '100%';
    changed.style.width = '200%';
    changed.style.zIndex = '1';
    changed.style.margin = '50%';

}



const revert = () => {
    const changed = document.querySelector('.article1');
    const blah = document.querySelector('.text1');
    const also = document.querySelector('.buttonArticle1');
    also.textContent = 'Click to Enlarge';
    blah.style.fontSize = '.005em';
    blah.style.visibility= 'hidden';
    changed.style.height = '105%';
    changed.style.width = '100%';
    changed.style.zIndex = '0';
    changed.style.margin = '0';

}



const changer = e => {
    const changed = document.querySelector('.article2');
    const blah = document.querySelector('.text2');
    const also = document.querySelector('.buttonArticle2');
    e.stopPropagation();

    blah.style.fontSize = '2em';
    blah.style.visibility= 'visible';
    also.textContent = 'Double-Click to Make Small';
    changed.style.height = '100%';
    changed.style.width = '200%';
    changed.style.zIndex = '1';

}

const reverter = () => {
    const changed = document.querySelector('.article2');
    const blah = document.querySelector('.text2');
    const also = document.querySelector('.buttonArticle2');
    also.textContent = 'Click to Enlarge';
    blah.style.fontSize = '.005em';
    blah.style.visibility= 'hidden';
    changed.style.height = '105%';
    changed.style.width = '100%';
    changed.style.zIndex = '0';


}

const changered = e => {
    const changed = document.querySelector('.article3');
    const blah = document.querySelector('.text3');
    const also = document.querySelector('.buttonArticle3');
    e.stopPropagation();

    blah.style.fontSize = '2em';
    blah.style.visibility= 'visible';
    also.textContent = 'Double-Click to Make Small';
    changed.style.height = '100%';
    changed.style.width = '200%';
    changed.style.zIndex = '1';

}

const revertered = () => {
    const changed = document.querySelector('.article3');
    const blah = document.querySelector('.text3');
    const also = document.querySelector('.buttonArticle3');
    also.textContent = 'Click to Enlarge';
    blah.style.fontSize = '.005em';
    blah.style.visibility= 'hidden';
    changed.style.height = '105%';
    changed.style.width = '100%';
    changed.style.zIndex = '0';


}

const button = document.querySelector('.buttonArticle1');
button.addEventListener('click', change);
button.addEventListener('dblclick', revert);

const random = document.querySelector('.buttonArticle2');
random.addEventListener('click', changer);
random.addEventListener('dblclick', reverter);

const hello = document.querySelector('.buttonArticle3');
hello.addEventListener('click', changered);
hello.addEventListener('dblclick', revertered);

// function blah() {
//     change.style.height = '160px';
//     change.style.width = '160px';
//     change.style.zIndex = '1';

//     }



//     change.addEventListener('click', )


// function close() {

// }
// <button type="button" onClick = "document.querySelector('.article').style.height = '600px';">Click Me!</button>


