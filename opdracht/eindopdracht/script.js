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
}