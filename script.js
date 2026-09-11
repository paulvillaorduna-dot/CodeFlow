const team = [
    {
        name: "Marika Lundell",
        role: "UX Engineer",
        image: "images/marika.png",
        alt: "Marika Lundell, UX Engineer",
        text: "Jag är en kreativ problemlösare som brinner för användarupplevelse och genomtänkt digital design."
    },

    {
        name: "Paul Villaorduna",
        role: "Fullstack .NET-utvecklare",
        image: "images/paul.png",
        alt: "Paul Villaorduna, Fullstack .NET-utvecklare",
        text: "Jag arbetar med både frontend, backend och databaser och bygger lösningar med bland annat JavaScript, C# och .NET."
    },

    {
        name: "Elnaz Ghanbari",
        role: "UX / Utveckling",
        image: "images/elnaz.png",
        alt: "Elnaz Ghanbari, UX och utveckling",
        text: "Jag kombinerar kreativitet och teknik för att utveckla moderna, genomtänkta och användarvänliga digitala lösningar."
    },

    {
        name: "Esther Contreras",
        role: "DevOps",
        image: "images/esther.png",
        alt: "Esther Contreras, DevOps",
        text: "Jag läser DevOps med examen 2026 och vill fördjupa mina kunskaper inom CI/CD, molntjänster och infrastruktursautomation."
    },

    {
        name: "Alex Grolle",
        role: "Fullstack Developer",
        image: "images/alex.png",
        alt: "Alex Grolle, Fullstack Developer",
        text: "Jag studerar Fullstack Development och har tidigare arbetat som Unity-utvecklare på en XR-studio. I framtiden vill jag bygga min egen spelstudio."
    }
];


const teamList = document.querySelector("#teamList");


team.forEach(person => {

    const teamCard = document.createElement("li");

    teamCard.classList.add("team-card");


    teamCard.innerHTML = `
        <button type="button" aria-label="Läs mer om ${person.name}">

            <figure>

                <img
                    src="${person.image}"
                    alt="${person.alt}"
                >

                <figcaption class="team-info">
                    <p>${person.text}</p>
                </figcaption>

            </figure>


            <section class="team-details">

                <h3>${person.name}</h3>

                <p>${person.role}</p>

            </section>

        </button>
    `;


    teamList.appendChild(teamCard);

});


const teamButton = document.querySelector("#teamButton");

const clickCount = document.querySelector("#clickCount");

let count = 0;


teamButton.addEventListener("click", () => {

    count++;

    clickCount.textContent = count;

});


const themeButton = document.querySelector("#themeButton");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "Ljust läge";

    } else {

        themeButton.textContent = "Mörkt läge";

    }

});