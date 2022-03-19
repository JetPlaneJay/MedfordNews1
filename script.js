
// const change = e => {
//     const changed = document.querySelector('.article');
//     const blah = document.querySelector('.text1');
//     const also = document.querySelector('.buttonArticle1');
//     e.stopPropagation();
//     blah.style.fontSize = '2em';
//     blah.style.visibility= 'visible';
//     also.textContent = 'Double-Click to Make Small';
//     // changed.style.height = '100%';
//     // changed.style.width = '200%';
//   changed.style.zIndex = '1';
//     // changed.style.margin = '50%';


// }



// const revert = () => {
//     // const changed = document.querySelector('.article1');
//     const blah = document.querySelector('.text1');
//     const also = document.querySelector('.buttonArticle1');
//     also.textContent = 'Click to Enlarge';
//     blah.style.fontSize = '.005em';
//     blah.style.visibility= 'hidden';
//     // changed.style.height = '105%';
//     // changed.style.width = '100%';
//     // changed.style.zIndex = '0';
//     // changed.style.margin = '0';


// }



// const changer = e => {
//     const changed = document.querySelector('.article');
//     const blah = document.querySelector('.text2');
//     const also = document.querySelector('.buttonArticle2');
//     e.stopPropagation();
//     blah.style.fontSize = '2em';
//     blah.style.visibility= 'visible';
//     also.textContent = 'Double-Click to Make Small';
//     // changed.style.height = '100%';
//     // changed.style.width = '200%';
//   changed.style.zIndex = '1';
//     // changed.style.margin = '50%';

// }

// const reverter = () => {
//     // const changed = document.querySelector('.article1');
//     const blah = document.querySelector('.text2');
//     const also = document.querySelector('.buttonArticle2');
//     also.textContent = 'Click to Enlarge';
//     blah.style.fontSize = '.005em';
//     blah.style.visibility= 'hidden';
//     // changed.style.height = '105%';
//     // changed.style.width = '100%';
//     // changed.style.zIndex = '0';
//     // changed.style.margin = '0';

// }

// const changered = e => {
//     const changed = document.querySelector('.article');
//     const blah = document.querySelector('.text3');
//     const also = document.querySelector('.buttonArticle3');
//     e.stopPropagation();
//     blah.style.fontSize = '2em';
//     blah.style.visibility= 'visible';
//     also.textContent = 'Double-Click to Make Small';
//     // changed.style.height = '100%';
//     // changed.style.width = '200%';
//     changed.style.zIndex = '1';


// }

// const revertered = () => {
//     const changed = document.querySelector('.article');
//     const blah = document.querySelector('.text3');
//     const also = document.querySelector('.buttonArticle3');
//     also.textContent = 'Click to Enlarge';
//     blah.style.fontSize = '.005em';
//     blah.style.visibility= 'hidden';
//     // changed.style.height = '105%';
//     // changed.style.width = '100%';
//     // changed.style.zIndex = '0';


// }

// const button = document.querySelector('.buttonArticle1');
// button.addEventListener('click', change);
// button.addEventListener('dblclick', revert);

// const random = document.querySelector('.buttonArticle2');
// random.addEventListener('click', changer);
// random.addEventListener('dblclick', reverter);

// const hello = document.querySelector('.buttonArticle3');
// hello.addEventListener('click', changered);
// hello.addEventListener('dblclick', revertered);


function introduction() {
    let text;
    let person = prompt("Please enter your name:", "'Arry Pawtah");
    if (person == null || person == "") {
        text = "Okay then...the mystery continues!";
    } else {
        text = "Hello " + person + "! Welcome to Medford's local storybook..."
    }
    document.querySelector('.intro').innerHTML = text;
}

const hey = e => {
    const visible = document.querySelector(".article2text");
    visible.style.visibility= "visible";
    visible.style.fontSize = "1em";
};

const buttonShow = document.querySelector(".articleButton1")
buttonShow.addEventListener('click', hey);


const yo = e => {
    const visible = document.querySelector(".article3text");
    visible.style.visibility= "visible";
    visible.style.fontSize = "1em";
};

const buttonShow1 = document.querySelector(".articleButton2")
buttonShow1.addEventListener('click', yo)





const ya = (e) => {
    const invisible =document.querySelector(".article2text")
    invisible.style.visibility = "hidden";
    invisible.style.fontSize = ".01em"
}

const buttonHide = document.querySelector(".articleButton1Close")
buttonHide.addEventListener('click', ya)





const woo = (e) => {
    const invisible =document.querySelector(".article3text")
    invisible.style.visibility = "hidden";
    invisible.style.fontSize = ".01em"
}

const buttonHide2 = document.querySelector(".articleButton2Close")
buttonHide2.addEventListener('click', woo)
