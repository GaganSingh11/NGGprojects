let btn = document.getElementById("btn");
let result = document.getElementById("result");

count = 0
function countUp() {
    count = count + 1
    // console.log(count)
    result.innerHTML = count   
}

function countDown() {
    count = count - 1
    // console.log(count)
    result.innerHTML = count   
}



let btn_hide_show = document.getElementById("hide-show")
let santa = document.getElementById("santa")

function hideShow() {
    if (santa.style.display === "block") {
        santa.style.display = "none";
        btn_hide_show.innerHTML = "Show";
    } else{
        santa.style.display = "block";
        btn_hide_show.innerHTML = "Hide";
    }
}

let radius = document.getElementById("radius").value;
let calculate = document.getElementById("cal-btn");
let area = document.getElementById("area");
console.log(radius)
area.innerHTML = 0;
function math() {
    let pie = 3.14;
    area.innerHTML = pie*radius*radius;
}