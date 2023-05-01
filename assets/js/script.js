var apiID = "e0e48aa8";
var apiKey = "5ecc0a6a74140b8afe687fc73be0ddb2";
var userInput = document.querySelector('#userInput').value;
var searchBtn = document.querySelector('#search');
var grabApi = `https://api.edamam.com/api/recipes/v2?q=${userInput}&type=any&app_id=${apiID}&app_key=${apiKey}`;


searchBtn.onclick = function() {
    var userInput = document.querySelector('#userInput').value;
    var grabApi = `https://api.edamam.com/api/recipes/v2?q=${userInput}&type=any&app_id=${apiID}&app_key=${apiKey}`;
    console.log(userInput);

    fetch(grabApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}


// function getMenu() {
//     fetch(`https://api.edamam.com/api/recipes/v2?q=${userInput}&type=any&app_id=${apiID}&app_key=${apiKey}&random=true`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
// })
// }