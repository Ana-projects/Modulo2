var hoteles = {
    Pablo: {
        name: "Don Pablo",
        location: "Torremolinos",
        picture: "https://www.viajeselcorteingles.es/imagenes/tm/europa/espana/andalucia-and/agp-malaga-costa-del-sol/agpto-torremolinos/b7ajnvzb/mdm-00-18agpto445-37asoldonpablo-poolgeneral_x.jpg",
    },
    Reconquista: {
        name: "Reconquista",
        location: "Oviedo",
        picture: "https://cdnh.octanio.com/hotel-Eurostars-De-La-Reconquista-FG800_10922_8.jpg",
    },
}

var selectedHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña: Pablo o Reconquista");

document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[selectedHotel].name;

document.getElementById("hotel-location").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("hotel-picture").src = hoteles[selectedHotel].picture;

// var rating = prompt("Puntuación: del 1 al 5");

// document.getElementById("rating").innerHTML = rating + " estrellas";

var stars = {
    una: 
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: 
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: 
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: 
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: 
        "<span>&#9733;</span><span>Pa&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que la reseña se anónima?");

document.getElementById("anonymous").checked = anonymous;