function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem("BlackHole", "Bacon, pickles, cheddar, onion, mayo, chicken black bread"));
    menu.appendChild(createMenuItem("Classic", "Pickles, tomatoes, cheddar, lettuce, onion and double meat"));
    menu.appendChild(createMenuItem("EggBurst", "Fried egg, 200g meat, fresh bacon and emmental"));
    menu.appendChild(createMenuItem("Teriyaki", "Teriyaki chicken, lettuce, tomatoes and onion"));
    menu.appendChild(createMenuItem("Chicken", "Lettuce, special Martos sauce, emmental and chicken"));
    menu.appendChild(createMenuItem("Double", "tomatoes, cheddar and double big meat"));

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.src = `images/burgers/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;