import { projects } from './projects.js';

const carousal = document.getElementById('work');

projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('workcard');

    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = project.title;
    const cardCompany = document.createElement('h4');
    cardCompany.innerHTML = project.company;
    const cardSoftwares = document.createElement('ul');
    cardSoftwares.classList.add('softwares');
    project.softwares.forEach((software) => {
        const softwareItem = document.createElement('li');
        softwareItem.innerHTML = software;
        cardSoftwares.appendChild(softwareItem);
    });
    const cardImage = document.createElement('img');
    cardImage.src = project.image;

    card.appendChild(cardTitle);
    card.appendChild(cardCompany);
    card.appendChild(cardSoftwares);
    card.appendChild(cardImage);

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

    card.appendChild(cardDetails);

    carousal.appendChild(card);
});
