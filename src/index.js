const content = document.querySelector('#content');

function addParagraph(text) {
    let p = document.createElement('p');
    p.textContent = text;
    return p;
}

function addHeader(text) {
    let h1 = document.createElement('h1');
    h1.textContent = text;
    return h1;
}

function addImg(image) {
    let img = document.createElement('img');
    img.src = image;
    return img;
}

content.appendChild(addImg('https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM='));

content.appendChild(addHeader('Wonderful Martos Burgers'));

content.appendChild(addParagraph('This is a great restaurant for families that actually enjoy good classy burgers.'));
