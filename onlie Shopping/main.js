"use strict"

//JSON load
function comeOnDB() {
    return fetch('data/data.json')
        .then(Response => Response.json())
        .then((json) => json.items)
        .catch(err => alert('안되겠는데요'))
};

comeOnDB().then(items => console.log(items))

//display json's items
function getItem(items) {
    return `
    <li class="item">
        <img src="${items.image}" />
    </li>
    <span>${items.gender}, ${items.size}</span>
    `;
}

function showMeItem(items){
    const container = document.querySelector(`.items`);
    container.innerHTML = items.map(items => getItem(items)).join('');
}

function setEvent(items) {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click',() => showMeItem(items));
}

//실제 동작
comeOnDB()
    .then(items => {
        showMeItem(items);
        setEvent(items);
    })