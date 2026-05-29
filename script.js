import { projects } from './projects.js';

// Get the carousal container
const carousal = document.getElementById('work');

// Create a card for each project
projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('workcard');

    // Create display elements for the card
    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = project.title;
    const cardCompany = document.createElement('h4');
    cardCompany.innerHTML = project.company;
    const cardSoftwares = document.createElement('ul');
    cardSoftwares.classList.add('softwares');
    project.softwares.forEach((software) => {
        const softwareItem = document.createElement('li');
        softwareItem.innerHTML = software;
        card.dataset.tags = software.toLowerCase();
        cardSoftwares.appendChild(softwareItem);
    });
    const cardImage = document.createElement('img');
    cardImage.src = project.image;

    // Append elements to the card
    card.appendChild(cardTitle);
    card.appendChild(cardCompany);
    card.appendChild(cardSoftwares);
    card.appendChild(cardImage);

    // Create description and links section
    const cardDetails = document.createElement('div');
    cardDetails.classList.add('workdetail');
    const cardDesc = document.createElement('p');
    cardDesc.innerHTML = project.description;
    const cardLinks = document.createElement('ul');
    cardLinks.classList.add('links');
    if (project.liveLink !== null) {
        const liveLink = document.createElement('li');
        liveLink.innerHTML = `<a href="${project.liveLink}" target="_blank">Live</a>`;
        cardLinks.appendChild(liveLink);
    }
    if (project.sourceLink !== null) {
        const sourceLink = document.createElement('li');
        sourceLink.innerHTML = `<a href="${project.sourceLink}" target="_blank">Source</a>`;
        cardLinks.appendChild(sourceLink);
    }
    cardDetails.appendChild(cardDesc);
    cardDetails.appendChild(cardLinks);

    // Append details to the card
    card.appendChild(cardDetails);

    // Append the card to the carousal
    carousal.appendChild(card);
});

// Get filter buttons and cards
const filterButtons = document.querySelectorAll("button[data-filter]");
const cards = document.querySelectorAll(".workcard");

// Add filter functionality to filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add 'active' class to the clicked button
        button.classList.add("active");

        // Filter cards
        cards.forEach(card => {
            const tags = card.getAttribute("data-tags").split(",");
            if (filter === "all" || tags.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
