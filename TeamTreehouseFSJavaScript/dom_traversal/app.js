const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemText');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');
const lis = listUl.children;
const firstLi = listUl.firstElementChild;
const lastLi = listUl.lastElementChild;

firstLi.style.backgroundColor = 'blue';
lastLi.style.backgroundColor = 'grey';

function attachListItemButtons(li){
    let up =document.createElement('button');
    up.className   = 'up';
    up.textContent = 'Up';
    li.appendChild(up);

    let down =document.createElement('button');
    down.className   = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove =document.createElement('button');
    remove.className   = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}
//add buttons to existing list items
for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        if (e.target.className == 'remove') {
            let li = e.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (e.target.className === 'up') {
            //ls is the parent of the button
            let li = e.target.parentNode;
            console.log('up was clicked');
            //get a parent of a parent
            let ul = li.parentNode;
            let prevLi = li.previousElementSibling;
            console.log(prevLi);
            if (prevLi) {
                //note that you need three nodes to do this
                //use truthy value to detect a null. If there is no sibling then done move the element
                ul.insertBefore(li, prevLi);
            }

        }
        if (e.target.className === 'down') {
            //li is the parent of the button
            console.log('down was clicked');
            let li = e.target.parentNode;
            console.log(li);
            //get a parent of a parent
            let ul = li.parentNode;
            console.log(ul);
            let nextLi = li.nextElementSibling;
            console.log('next ' +  nextLi);
            if (nextLi) {
                //note that you need three nodes to do this
                //use truthy value to detect a null. If there is no sibling then do not move the element
                ul.insertBefore(nextLi, li);
                //note that the order had to be reversed from previous function
            }

        }
    }

});

/*listDiv.addEventListener('mouseout', (e) => {
  if(e.target.tagName =='LI'){
  e.target.textContent = e.target.textContent.toLowerCase();
  }
});*/

document.addEventListener('click', (event) => {
    console.log(event.target);
});


addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
});




toggleList.addEventListener('click', () => {
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block';
        toggleList.textContent = 'Hide List';
    } else {

        listDiv.style.display = 'none';
        toggleList.textContent = 'Show List';
    }

});

button.addEventListener('click', () => {
    p.textContent = input.value;

});

p.title = "list description";

