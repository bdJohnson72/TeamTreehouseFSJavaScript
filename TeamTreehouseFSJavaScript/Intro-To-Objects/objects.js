console.log('Connected');



let person = {
    name : 'Brooks',
    Country: 'US',
    age : 35,
    treehouseStudent : true,
    skills: ['Apex', 'Java', 'Javsscript', 'HTML', 'CSS']
};

function print(message) {
    let div = document.getElementById('output');
    div.innerHTML = message;
}

let message =  '<p> Hello. My name is ' + person.name + '</p>';
    message +=  '<p> I  am skilled in ' + person.skills.join(', ');
print(message);

//use to print object values 

for( prop in person){
    console.log(prop, ': ', person[prop]);
}


