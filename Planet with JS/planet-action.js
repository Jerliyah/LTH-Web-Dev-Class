
var planet = document.getElementById("planet");
var header = document.getElementById("header");

var planets = [
    "images/blueAndGold.jpg",
    "images/blueAndWhite.JPG",
    "images/deepSpace.jpeg",
    "images/ghostDesert.jpg",
    "images/yellow.jpg",
    "images/roseRock.JPG",
    "images/darkShine.jpg",
    "images/deepBlue.jpg",
    "images/greyHoneyComb.jpg",
    "images/water.jpg"
];

currentIndex = 0;


function name_planet() {

    var new_planet_name = prompt("What would you like the planet to be called?");
    header.innerHTML = "Planet " + new_planet_name;
    console.log("Name: " + new_planet_name);
    
    planet.setAttribute("src", planets[currentIndex]);
    console.log("Planet: " + planets[currentIndex] + "\n");

    var maxIndex = planets.length - 1;

    if (currentIndex < maxIndex) {
        currentIndex += 1;
    } 
    else {
        currentIndex = 0;
    }

};