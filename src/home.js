function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    
    const restaurantImage = document.createElement('img');
    restaurantImage.src = 'images/restaurant.jpg';
    restaurantImage.alt = 'restaurant place';

    home.appendChild(createParagraph('A wide variety of really well made burgers'))
    home.appendChild(createParagraph('Working with eco friendly products'))
    home.appendChild(restaurantImage)
    home.appendChild(createParagraph("Come and visit us or order online!"))

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;