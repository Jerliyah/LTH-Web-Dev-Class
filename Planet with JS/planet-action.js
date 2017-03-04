
var planet = document.getElementById("planet");
var header = document.getElementById("header");

var planets = [
    "https://www.hollanders.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/blktmp2498_1_2.jpg","http://3.bp.blogspot.com/-i44hLAD9I6M/UTzuXcmxcCI/AAAAAAAADp0/YCgPSV667I8/s1600/venetian+paper+002.JPG","http://www.tr.all.biz/img/tr/catalog/middle/128182.jpeg","http://www.stoneadd.com/photo/upload/stone/marble/turkey/Salome_Marble.jpg","http://www.exotic-mramor-granit.ru/wp-content/uploads/2014/03/Crema-Valencia-Mramor.jpg","http://2.bp.blogspot.com/-6A7lLCDJG3U/UDQA4qO7IJI/AAAAAAAAD7I/AYTOzE5TF6s/s1600/IMG_7256.JPG","http://bgfons.com/upload/granit_texture4061.jpg","https://s-media-cache-ak0.pinimg.com/736x/44/0a/92/440a924e84e79ad96b66357e998f14ae.jpg","http://www.homedepot.com/catalog/productImages/1000/70/70dc18f8-9386-4437-94b0-28d0e4bf8dbd_1000.jpg","http://www.photoshoplayer.com/wp-content/uploads/2013/08/Azure_Blue_Marble_Texture_by_FantasyStock.jpg"
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