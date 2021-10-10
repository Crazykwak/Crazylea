"use strict"

//JSON load
function comeOnDB() {
    return fetch('data/data.json')
        .then(Response => Response.json())
        .then((json) => json.items)
        .catch(err => alert('안되겠는데요'))
};

//display json's items
function getItem(items) {
    return `
    <li class="item">
        <img src="${items.image}" class="item_Thumnail" />
    <span class="item_Text">${items.gender}, ${items.size}</span>
    </li>
    `;
}

function showMeItem(items){
    const container = document.querySelector(`.items`);
    container.innerHTML = items.map(items => getItem(items)).join('');
}

function setEvent(items) {
    const logo = document.querySelector('.logo');
    const Btn = document.querySelector('.menu');
    logo.addEventListener('click',() => showMeItem(items));
    Btn.addEventListener('click', event => filte(event, items));
}

function filte(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const ans = dataset.ans;

    if(key === null || ans === null){
        return;
    }

    showMeItem(items.filter(items => items[key] === ans));
}

//실제 동작
comeOnDB()
    .then(items => {
        showMeItem(items);
        setEvent(items);
    })
    .catch(console.log)