// DOM - Document Object Model.

// html file -> object

// we can control html/css using js

// random bg color generator

// document.body.style.backgroundColor ="orange";

// alert("Hello.....")

const buttons= document.getElementsByTagName("button");//used to get element(tag)from document(inde3x.html)

// button = <button> Click </button>

// buttons[0].textcontent ="name changed";//to change next content of any element.

// bhutton[1].textContent ="button changed"

// process = event
// to add click on button,addEventlistener

buttons[0].addEventListener("click", () => {
document.body.style.backgroundColor ="blue";
});

buttons[1].addEventListener("click",() => {
    document.body.style.backgroundColor ="gray";
})

buttons[0].addEventListener("click",() => {
    const str = Math.floor(Math.random() * 16581375);toString(16)//to generete to random number from 0 to 1,20 
    document.body.style.backgroundColor ="#" + str;
    buttons[0].textContent = str;
})
buttons[1].addEventListener("click",() => {
    const str = Math.floor(Math.random() * 52190);toString(16)//to generete to random number from 0 to 1,20 
    document.body.style.backgroundColor ="#" + str;
    buttons[1].textContent = str;
})

   