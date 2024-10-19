let form1 = document.getElementById("questionsForm");
let butn = document.getElementById("submitBtn")
let id1 = document.getElementById("cityHyderabad")
let id2 = document.getElementById("cityChennai")
let id3 = document.getElementById("cityDelhi")
let id4 = document.getElementById("cityMumbai")
let para = document.getElementById("resultMsg")
let value3 = "";
let f1 = function() {
    if (event.target.value === "Hyderabad") {
        value3 = "Wrong Answer!"
    }
}
let f2 = function() {
    if (event.target.value === "Chennai") {
        value3 = "wrong Answer!"
        console.log(1)
    }
}
let f3 = function() {
    if (event.target.value === "Delhi") {
        value3 = "Correct Answer!"
    }
}
let f4 = function() {
    if (event.target.value === "Mumbai") {
        value3 = "wrong Answer!"
    }
}
id1.addEventListener("change", f1)
id2.addEventListener("change", f2)
id3.addEventListener("change", f3)
id4.addEventListener("change", f4)

form1.addEventListener("submit", function(event) {
    event.preventDefault();
    if (value3 === "Correct Answer!") {
        para.textContent = "correct answer"
        para.style.color = "green"
    } else if (value3 === "Wrong Answer!") {
        para.textContent = "Wrong Answer!"
    } else {
        para.textContent = "Please select the Answer"
    }
});