const heroImage = document.getElementById("heroImage");
const heroName = document.getElementById("heroName");
const heroRole = document.getElementById("heroRole");
const heroLane = document.getElementById("heroLane");
const heroDifficulty = document.getElementById("heroDifficulty");
const heroSkills = document.getElementById("heroSkills");

let heroes = [];
let currentHero = null;

async function loadHeroes() {
try {
const response = await fetch("heroes.json");
heroes = await response.json();
} catch (error) {
console.log(error);
}
}

loadHeroes();

document.getElementById("searchBtn").addEventListener("click", function () {


const search = document.getElementById("heroInput").value.trim().toLowerCase();

currentHero = heroes.find(function(hero){
    return hero.name.toLowerCase() === search;
});

if(!currentHero){
    heroName.innerText = "Hero not found";
    heroRole.innerText = "";
    heroImage.style.display = "none";
    return;
}

heroName.innerText = currentHero.name;
heroRole.innerText = "Role: " + currentHero.role;

heroImage.src = currentHero.image;
heroImage.alt = currentHero.name;
heroImage.style.display = "block";

// Clear previous hero details
heroLane.innerText = "Lane: -";
heroDifficulty.innerText = "Difficulty: -";
heroSkills.innerHTML = "";

});

document.getElementById("detailsBtn").addEventListener("click", function(){


if(!currentHero){
    return;
}

heroLane.innerText = "Lane: " + currentHero.lane;
heroDifficulty.innerText = "Difficulty: " + currentHero.difficulty;

heroSkills.innerHTML = "";

currentHero.skills.forEach(function(skill){

    heroSkills.innerHTML += "<div style='border:1px solid gray;padding:10px;margin:10px;border-radius:8px;'><h4>"
    + skill.name +
    "</h4><p>" +
    skill.description +
    "</p></div>";

});


});
