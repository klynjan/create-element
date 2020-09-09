
const myButton = document.querySelector('#clicker');
const removeLastItem = document.querySelector('#remove-last');
const myInput = document.querySelector('#my-input');
const myUl = document.querySelector('#my-list');
const myLi = document.getElementsByTagName('li')

myButton.addEventListener('click', () => {
    if(myInput.value === ''){
        return false
    }
     const li = createElement();
     let lastLI = myUl.appendChild(li);   
     lastLI.className = 'remove-item'
     
});

function createElement(){
    const newLi = document.createElement('li');
    const text = document.createTextNode(myInput.value);
    newLi.appendChild(text);
    myInput.value = '';
    return newLi;
}

removeLastItem.addEventListener('click', () => {
    
    let child = myUl.getElementsByTagName('li')[0];
    console.log(child);
    myUl.removeChild(child)
}); 






