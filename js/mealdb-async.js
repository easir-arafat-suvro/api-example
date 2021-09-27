/* add a spiner when the data load */

/*  Alternative option of fetch is async + await */

const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = ''; // clear input field
    if (searchText == '') {
        document.getElementById('display-meal-details')
            .innerText = 'Please write the food name you want to search';
    }
    else {
        /* load Data */
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            displayMeals(data.meals)
        }
        catch (error) {
            console.log(error);
        }

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayMeals(data.meals))
    }

}

/* show meal list */
const displayMeals = foods => {
    const searchResult = document.getElementById('meal-card');

    // divElement.innerHTML = ''; //Clear the previous search result
    searchResult.textContent = ''; //Clear the previous search result
    const divElementDetails = document.getElementById('display-meal-details');
    divElementDetails.textContent = ''; // clear previous meal details result

    foods.forEach(meal => {
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
                    <button class ="btn btn-secondary">Show Details</button>
                </div>
            </div>
            `;
        searchResult.appendChild(div);
    });
};

/* Load Data Detail Meals */
const mealDetails = async (foodId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;

    const res = await fetch(url)
    const data = await res.json()
    displayMealsDetails(data.meals[0])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealsDetails(data.meals[0]))
}

/* Show meal details */
const displayMealsDetails = (mealDetails) => {
    const divElementDetails = document.getElementById('display-meal-details');
    divElementDetails.textContent = ''; // clear previous meal details result
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

