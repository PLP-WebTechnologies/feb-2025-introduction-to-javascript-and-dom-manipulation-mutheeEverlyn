// Apply styles using JavaScript
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.textAlign = "center";
document.body.style.background = "linear-gradient(to right,rgb(195, 166, 226),rgb(207, 162, 198))";
document.body.style.color = "#333";

// Navbar styling
let navbar = document.getElementById("navbar");
navbar.style.backgroundColor = "#444";
navbar.style.padding = "10px";
navbar.style.width = "100%";

let navItems = navbar.getElementsByTagName("li");
for (let item of navItems) {
    item.style.display = "inline";
    item.style.margin = "10px";
}

let navLinks = navbar.getElementsByTagName("a");
for (let link of navLinks) {
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.padding = "5px 10px";
    link.style.borderRadius = "5px";
    link.style.transition = "background-color 0.3s";
}

for (let link of navLinks) {
    link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#555";
    });
    link.addEventListener("mouseout", () => {
        link.style.backgroundColor = "transparent";
    });
}

// Button styling
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.style.padding = "10px 20px";
    button.style.margin = "10px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#2575fc";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";
}

for (let button of buttons) {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#6a11cb";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#2575fc";
    });
}

// Table styling
let table = document.getElementById("data-table");
table.style.width = "80%";
table.style.margin = "20px auto";
table.style.borderCollapse = "collapse";
table.style.border = "2px solid black";

let ths = table.getElementsByTagName("th");
for (let th of ths) {
    th.style.backgroundColor = "#555";
    th.style.color = "white";
    th.style.padding = "10px";
    th.style.border = "1px solid black";
}

let tds = table.getElementsByTagName("td");
for (let td of tds) {
    td.style.padding = "10px";
    td.style.border = "1px solid black";
}

// Contact form styling
let contactForm = document.getElementById("contact-form");
contactForm.style.width = "50%";
contactForm.style.margin = "20px auto";
contactForm.style.padding = "20px";
contactForm.style.backgroundColor = "white";
contactForm.style.borderRadius = "10px";
contactForm.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

let formLabels = contactForm.getElementsByTagName("label");
for (let label of formLabels) {
    label.style.display = "block";
    label.style.textAlign = "left";
    label.style.marginBottom = "5px";
    label.style.fontWeight = "bold";
}

let formInputs = contactForm.querySelectorAll("input, textarea");
for (let input of formInputs) {
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.marginBottom = "10px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
    input.style.boxSizing = "border-box";
}

let submitButton = contactForm.querySelector("button");
submitButton.style.width = "100%";
submitButton.style.padding = "10px";
submitButton.style.backgroundColor = "#2575fc";
submitButton.style.color = "white";
submitButton.style.border = "none";
submitButton.style.borderRadius = "5px";
submitButton.style.cursor = "pointer";
submitButton.style.transition = "background-color 0.3s";

submitButton.addEventListener("mouseover", () => {
    submitButton.style.backgroundColor = "#6a11cb";
});
submitButton.addEventListener("mouseout", () => {
    submitButton.style.backgroundColor = "#2575fc";
});

// Footer styling
let footer = document.getElementById("footer");
footer.style.backgroundColor = "#333";
footer.style.color = "white";
footer.style.padding = "10px";
footer.style.textAlign = "center";
footer.style.position = "relative";
footer.style.width = "100%";


function changeText() {
    document.getElementById("title").textContent = "JavaScript is Amazing!";
}

function changeStyle() {
    document.getElementById("title").style.color = "#fff";
    document.getElementById("description").style.fontSize = "50px";
}

function addElement() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This paragraph was added dynamically!";
    newParagraph.id = "dynamicText";
    document.getElementById("content-container").appendChild(newParagraph);
}

function removeElement() {
    let element = document.getElementById("dynamicText");
    if (element) {
        element.remove();
    } else {
        alert("No element to remove!");
    }
}
