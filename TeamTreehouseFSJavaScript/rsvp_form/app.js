
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrar');
    const input = form.querySelector('input');
    const mainDiv = document.querySelector('.main');
    const ul = document.getElementById('invitedList');

    const  div = document.createElement('div');
    const filterLablel = document.createElement('label');
    const filterCheckbox = document.createElement('input');
    filterLablel.textContent = "Hide those who have not responded";
    filterCheckbox.type = 'checkbox';
    div.appendChild(filterLablel);
    div.appendChild(filterCheckbox);
    mainDiv.insertBefore(div, ul);

    filterCheckbox.addEventListener('change', (e) => {

    })

    function createLI(text){
        function createElement(elementName, property, value){
            const element = document.createElement(elementName);
            //the brackets let us access the property dynamically
            element[property] = value;
            return element;
        }
        function appendToLi(elementName, property, value){
            const element = createElement(elementName, property, value);
            li.appendChild(element);

        }
        const li = document.createElement('li');

        appendToLi('span', 'textContent', text);


        const label = createElement('label', 'textContent', 'Confirmed');

        checkbox = createElement('input', 'type', 'checkbox');
        label.appendChild(checkbox);
        li.appendChild(label);

        editButton = createElement('button', 'textContent', 'edit');
        li.appendChild(editButton);

        removeButton = createElement('button', 'textContent', 'remove');
        removeButton.textContent  = 'remove';
        li.appendChild(removeButton);

        return li;
    }


    form.addEventListener('submit', (e) =>{
        //prevent default refresh on broswer when the form is submitted
        e.preventDefault();
        const text = input.value;
        //clears the form input value
        input.value = '';
        const li = createLI(text);
        ul.appendChild(li);
    })

    ul.addEventListener('change', (e) => {
        console.log(e.target);
        const checkbox = e.target;
        const checked = checkbox.checked;
        console.log(checkbox.checked);
        const listItem = checkbox.parentNode.parentNode;
        console.log(listItem)

        if(checked){
            listItem.className = 'responded';
        }else {
            listItem.className = '';
        }
    })

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON'){
            const li = e.target.parentNode;
            const ul = li.parentNode;
            const nameActions = {
                
            }
            const button = e.target;
            function removeName() {
                ul.removeChild(li);
            }
            function editName() {
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
            }
            function saveName(){
                const input = li.firstElementChild;
                console.log(input.value);
                const span = document.createElement('input');
                span.value = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                button.textContent = 'save';
            }
            if (button.textContent === 'remove'){
                removeName();
            }else if (button.textContent === 'edit'){
                editName();
            }else if ( button.textContent === 'save'){
                saveName();
            }
        }
    })

})

