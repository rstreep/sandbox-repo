var apiID = "e0e48aa8";
var apiKey = "5ecc0a6a74140b8afe687fc73be0ddb2";
var userInput = document.querySelector('#userInput').value;
// var dietEl = document.querySelector('#diets').value;
// var healthEl = document.querySelector('#health-concerns').value;
var searchBtn = document.querySelector('#search');
var grabApi = `https://api.edamam.com/api/recipes/v2?q=${userInput}&type=any&app_id=${apiID}&app_key=${apiKey}`;
var returnEl = document.querySelector('#return');

searchBtn.onclick = function () {
    var userInput = document.querySelector('#userInput').value;
    var dietEl = document.querySelector('#diets').value;
    var healthEl = document.querySelector('#health-concerns').value;
    var menu = '';

    fetch(`https://api.edamam.com/api/recipes/v2?type=any&dishType=Starter&app_id=${apiID}&app_key=${apiKey}&diet=${dietEl}&health=${healthEl}&random=true`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var menu = data.hits.map( food => {
                return `<a href="${food.recipe.url}">${food.recipe.label}</a>`; 
            }
            );
            console.log(menu[0]);
            console.log(menu[1]);
            document.querySelector('#app1').insertAdjacentHTML("afterbegin", menu[0]);
            document.querySelector('#app2').insertAdjacentHTML("afterbegin", menu[1]);
        })

    fetch(`https://api.edamam.com/api/recipes/v2?q=${userInput}&type=any&dishType=Main%20course&app_id=${apiID}&app_key=${apiKey}&diet=${dietEl}&health=${healthEl}&random=true`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var menu = data.hits.map( food => {
                return `<a href="${food.recipe.url}">${food.recipe.label}</a>`; 
            }
            );
            console.log(menu[0]);
            console.log(menu[1]);
            document.querySelector('#ent1').insertAdjacentHTML("afterbegin", menu[0]);
            document.querySelector('#ent2').insertAdjacentHTML("afterbegin", menu[1]);
        })

        fetch(`https://api.edamam.com/api/recipes/v2?type=any&dishType=Desserts&app_id=${apiID}&app_key=${apiKey}&diet=${dietEl}&health=${healthEl}&random=true`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var menu = data.hits.map( food => {
                return `<a href="${food.recipe.url}">${food.recipe.label}</a>`; 
            }
            );
            console.log(menu[0]);
            console.log(menu[1]);
            document.querySelector('#des1').insertAdjacentHTML("afterbegin", menu[0]);
            document.querySelector('#des2').insertAdjacentHTML("afterbegin", menu[1]);
        })
}
