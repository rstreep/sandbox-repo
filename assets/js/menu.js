var apiID = "e0e48aa8";
var apiKey = "5ecc0a6a74140b8afe687fc73be0ddb2";
var genBtn = document.querySelector('#generate');

genBtn.onclick = function () {
    var userSearch = document.querySelector('#userSearch').value;
    // console.log(userSearch);
    event.preventDefault();
    // var dietEl = document.querySelector('#diets').value;
    // var healthEl = document.querySelector('#health-concerns').value;
    var menu = '';
    // appetizer fetch request
    fetch(`https://api.edamam.com/api/recipes/v2?type=any&dishType=Starter&app_id=${apiID}&app_key=${apiKey}&random=true`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var menu = data.hits.map(food => {
                return `<a href="${food.recipe.url}">${food.recipe.label}</a>`;
            }
            );
            // console.log(menu[0]);
            // console.log(menu[1]);
            // adds response to html at designated tags
            document.querySelector('#app1').insertAdjacentHTML("afterbegin", menu[0]);
            document.querySelector('#app2').insertAdjacentHTML("afterbegin", menu[1]);
        });
    // entree fetch request
    fetch(`https://api.edamam.com/api/recipes/v2?q=${userSearch}&type=any&dishType=Main%20course&app_id=${apiID}&app_key=${apiKey}&random=true`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var menu = data.hits.map(food => {
                return `<a href="${food.recipe.url}">${food.recipe.label}</a>`;
            }
            );
            // console.log(menu[0]);
            // console.log(menu[1]);
            // adds response to html at designated tags
            document.querySelector('#ent1').insertAdjacentHTML("afterbegin", menu[0]);
            document.querySelector('#ent2').insertAdjacentHTML("afterbegin", menu[1]);
        });
    // desserts fetch request
    fetch(`https://api.edamam.com/api/recipes/v2?type=any&dishType=Desserts&app_id=${apiID}&app_key=${apiKey}&random=true`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var menu = data.hits.map(food => {
                return `<a href="${food.recipe.url}">${food.recipe.label}</a>`;
            }
            );
            // console.log(menu[0]);
            // console.log(menu[1]);
            // adds response to html at designated tags
            document.querySelector('#des1').insertAdjacentHTML("afterbegin", menu[0]);
            document.querySelector('#des2').insertAdjacentHTML("afterbegin", menu[1]);
        });
};