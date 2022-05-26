function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem("BlackHole", "Bacon, pickles, cheddar, onion, mayo, chicken black bread"));
    menu.appendChild(createMenuItem("Classic", "Pickles, tomatoes, cheddar, lettuce, onion and double meat"));
    menu.appendChild(createMenuItem("EggBurst", "Fried egg, 200g meat, fresh bacon and emmental"));
    menu.appendChild(createMenuItem("Teriyaki", "Teriyaki chicken, pickles, lettuce, tomatoes and onion"));
    menu.appendChild(createMenuItem("Chicken", "Lettuce, tomato, special Martos sauce, emmental and chicken"));
    menu.appendChild(createMenuItem("Double", "tomatoes, cheddar, caramelised onion, lettuce and double big meat"));
    menu.appendChild(createMenuItem("Rustic", "Rustic bread, pulled pork, fried egg, cheddar and lettuce"));

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
    foodImage.src = `../images/burgers/${name.toLowerCase()}.png`;
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