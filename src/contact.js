function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📱 609 445 580';

    const address = document.createElement('p');
    address.textContent = '🛣️ Calle Doctor Civera 35, Jaen, Spain';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = 'images/restaurant-location.png';
    restaurantLocation.alt = 'Martos Burgers location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;