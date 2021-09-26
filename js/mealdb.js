const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

/* show meal list */
const displayMeals = foods => {
    // console.log(foods)
    const divElement = document.getElementById('meal-card');
    foods.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class ="card-body">
                <h5 class ="card-title">${meal.strMeal}</h5>
                <p class ="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
            <div class ="card-footer">
                <button class ="btn btn-secondary">Order Now</button>
            </div>
        </div>
        `;
        divElement.appendChild(div);
    });
};

/* Show Details */
const mealDetails = (foodId) => {
    console.log(foodId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))
}

const displayMealsDetails = (mealDetails) => {
    console.log(mealDetails)
    const divElementDetails = document.getElementById('display-meal-details');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mealDetails.strMeal}</h5>
      <p class="card-text">${mealDetails.strInstructions.slice(0, 500)}</p>
      <a href="${mealDetails.strYoutube}" class="btn btn-primary">Go Youtube</a>
    </div>
`;
    divElementDetails.appendChild(div);
}