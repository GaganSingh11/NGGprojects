// Ex.1
let array1 = [1,2,3,4,5];

function first_to_last(array) {
    let first = array.shift();
    array.push(first);
    console.log(array);
}

first_to_last(array1)

// Ex.2
let array2 = [1, 2, "apple", 4, "banana"];

function array_to_string(array) {
    let string = array.toString();
    console.log(string);
    return string
}

array_to_string(array2)

// Ex.3
// Array to HTML List


function array_to_html_list() {
    let array = [1,2,3,4,5]
    for (let item in array) {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(item));
     
        document.querySelector('#list-1').appendChild(node);  
    }
}

// Ex.4
let input = document.getElementById("input").value;
let add = document.getElementById("add");
// let li = document.getElementById("");

function add_to_list() {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(input));
    document.querySelector('#list-2').appendChild(node); 
}

// Ex.5
// Clock 
function clock() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById('digital-clock').innerHTML = time;
}

setInterval(clock, 1000)




