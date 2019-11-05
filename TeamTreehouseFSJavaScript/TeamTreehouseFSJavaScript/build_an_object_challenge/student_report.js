let message = '';
let student;
let search;

function print(message) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;

}
function getStudentReport(student) {
    console.log('get student report called');

   let  report = '<h2> Student: '    + student.Name + '</h2>';
    report += '<p>Track: '        + student.Track + '</p>';
    report += '<p>Points: '       + student.Points + '</p>';
    report += '<p>Achievements: ' + student.Achievments + ' </p>';
    console.log(report);
    return report;
}

while(true){
    search = prompt('Search student records : enter a name. (or type "quit to end")');
    console.log(search);
    if(search.toLowerCase() === 'quit' || search.toLowerCase() === null){
        console.log('Entered break section');
        console.log(search.toLowerCase());
        break;
    }
    for (let i = 0; i < students.length; i+=1){
        student = students[i];
        console.log(student.Name);
        console.log(search);
        if(student.Name === search){
            console.log(message);
            message = getStudentReport(student);
            console.log(message);
            print(message);
            break;
        }
    }
}

