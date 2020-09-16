
const myButton = document.querySelector('#clicker');

const myInput = document.querySelector('#my-input');
const myUl = document.querySelector('#my-list');
const myLi = document.getElementsByTagName('li')

myButton.addEventListener('click', () => {
    if(myInput.value === ''){
        return false
    }
     const li = createElement();
     myUl.appendChild(li);  
     
     
     
     
});

function createElement(){
    //creates LI element
    const newLi = document.createElement('li');
    const text = document.createTextNode(myInput.value);

    //creates checkbox input
    const check = document.createElement('input');
    check.type = "checkbox";

    newLi.appendChild(text);
    newLi.appendChild(check);
    myInput.value = '';

    check.addEventListener('click', () => {
        newLi.classList.toggle('checked');
    })    
    return newLi;
}








