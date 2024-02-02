var queryUrl ="";

// ------ google books api -------
var apiKey = "AIzaSyDtC1WiKcd8r4Tngf5rf4wik_-WLFWrAeo";

queryUrl="https://www.googleapis.com/books/v1/volumes?q=eleanor+inauthor:gail&key="+apiKey;
fetch(queryUrl)
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)
    var coverImg = document.querySelector("#cover");
coverImg.setAttribute("src", data.items[1].volumeInfo.imageLinks.thumbnail);
var previewLink = document.querySelector("#previewLink");
previewLink.setAttribute("href", data.items[1].volumeInfo.previewLink);
var author = document.querySelector("#author");
author.textContent = data.items[1].volumeInfo.authors
var saleLink = document.querySelector("#saleLink");
// console.log(data.items[1].saleInfo.buyLink)
saleLink.setAttribute("href", data.items[1].saleInfo.buyLink);
});


// ------- cocktaildb api -------

queryUrl="https://thecocktaildb.com/api/json/v1/1/random.php"

fetch(queryUrl)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    var drinkP = document.querySelector("#drink");
    var drinkImg = document.querySelector("#drinkImg");
    drinkP.textContent += data.drinks[0].strDrink
    drinkImg.setAttribute("src", data.drinks[0].strDrinkThumb)
    drinkImg.setAttribute("width", 200)
})


// ------ openlibrary api ------

// var q = "eleanor-oliphant"
// queryUrl = "https://openlibrary.org/search.json?q=" + q;

// fetch(queryUrl)
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data.docs[0])
//     var titleEl = document.querySelector("#title");
//     titleEl.textContent = data.docs[0].title;
// })