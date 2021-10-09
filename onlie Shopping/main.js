"use strict"

let test = {};

const comeOnDB = () => {
    fetch('data/item.json')
        .then(Response => Response.json())
        .then(temp => console.log(temp))
}

console.log(test);