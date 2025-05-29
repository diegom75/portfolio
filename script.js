let siteDisplay = document.getElementsById("siteDisplay");

// buttons for navbars

let homeButton = document.getElementById("home")
let aboutButton = document.getElementById("about")
let projectsButton = document.getElementById("projects")
let contactButton = document.getElementById("contact")



// functions

homeButton.addEventListener(onclick, showHome());

function showHome() {
    siteDisplay.innerHTML = ""
    siteDisplay.innerHTML = `
    <p>test<p>
    `
}

function showAbout() {
    siteDisplay.innerHTML = ""
    siteDisplay.innerHTML = `
    <p>test2<p>
    `
}