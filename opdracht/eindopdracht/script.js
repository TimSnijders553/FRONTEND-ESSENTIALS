var bezoeker = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    email : prompt("Wat is je email?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    woonplaats : prompt("Wat is je woonplaats?"),
};



if (bezoeker.leeftijd == 16) {
    document.body.style.backgroundColor = "orange";
} else if (bezoeker.leeftijd == 17) {
    document.body.style.backgroundColor = "blue";
} else if (bezoeker.leeftijd == 18) {
    document.body.style.backgroundColor = "yellow";
} else if (bezoeker.leeftijd == 19) {
    document.body.style.backgroundColor = "green";
} else if (bezoeker.leeftijd == null) {
    document.body.style.backgroundColor = "white"; 
}

document.querySelector("#test").innerHTML = (bezoeker.voornaam + " " + bezoeker.achternaam);

document.querySelector("#email").innerHTML = (bezoeker.email)
document.querySelector("#leeftijd").innerHTML = (bezoeker.leeftijd)
document.querySelector("#woonplaats").innerHTML = (bezoeker.woonplaats)