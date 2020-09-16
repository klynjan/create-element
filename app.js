
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

    //creates delete button
    const deleteButton = document.createElement("BUTTON");
    const deleteButtonText = document.createTextNode('del');
    deleteButton.appendChild(deleteButtonText);
    //append elements to the DOM
    newLi.appendChild(text);
    newLi.appendChild(check);
    newLi.appendChild(deleteButton);
    //resets the input and focuses the input
    myInput.value = '';
    myInput.focus();

    deleteButton.addEventListener('click', () => {
        
        newLi.remove();
})  

    newLi.addEventListener('click', () => {
        newLi.classList.toggle('checked');
    })
    
    return newLi;
}








