console.log('hello World!');
let stTime_sub = new Map();
let subject_class = new Map();
let subject_color = new Map();
// let classes = ['A1', 'B1', 'C1', 'D1', 'E1', 'LAB1'];


fetchData();
populateScheculeTable();




var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    console.log(this.value + typeof(this.value));
    var subject = stTime_sub.get(parseInt(this.value));
    console.log('subject: ' + subject);
    var clazzName = subject_class.get(subject);
    console.log('CLAZZ: ' + clazzName);
    var color = subject_color.get(subject);
    console.log('Color: ' + color);

    let classes = document.getElementsByClassName('class');
    for(const clazz of classes) {
        var id = clazz.getAttribute('id');
        console.log(id);
        if(id == clazzName) {
            // console.log('!!!!!!!@#!@#!@#!@#!@#!@#!@#!@#!@#')
            clazz.style.background = color;
        }else {
            clazz.style.background = null;
        }
    }

}  

function fetchData() {
    stTime_sub.set(1, 'Linear Algebra');
    stTime_sub.set(2, 'Operating Systems');
    stTime_sub.set(3, 'Electronics');
    stTime_sub.set(4, 'Computer Architecture');
    stTime_sub.set(5, 'Database Systems');
    stTime_sub.set(6, 'Java Programming');

    subject_class.set('Linear Algebra', 'A1');
    subject_class.set('Operating Systems', 'D1');
    subject_class.set('Electronics', 'C1');
    subject_class.set('Computer Architecture', 'LAB1');
    subject_class.set('Database Systems', 'B1');
    subject_class.set('Java Programming', 'E1');

    subject_color.set('Linear Algebra', '#640D6B');
    subject_color.set('Operating Systems', '#04AA6D');
    subject_color.set('Electronics', '#FC4100');
    subject_color.set('Computer Architecture', '#1D24CA');
    subject_color.set('Database Systems', '#F72798');
    subject_color.set('Java Programming', '#D2DE32');   
}

function populateScheculeTable() {
    var timeTable = document.getElementById('orari');
    stTime_sub.forEach(value => {
        console.log(value);
        var subjectDiv = document.createElement("div");
        subjectDiv.setAttribute('class', 'subject');
        subjectDiv.innerText = value + ' ';
        var colorDiv = document.createElement("div");
        colorDiv.setAttribute('class', 'color-code');
        console.log('color ' + subject_color.get(value));
        colorDiv.style.backgroundColor = subject_color.get(value);
        subjectDiv.appendChild(colorDiv);
        timeTable.appendChild(subjectDiv);
    });
}