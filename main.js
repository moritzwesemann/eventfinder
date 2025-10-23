const search_btn = document.getElementById("search-button");
const street = document.getElementById("street-input");
const city = document.getElementById("city-input");
const postal_code = document.getElementById("postal-input");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(street.value);
  console.log(city.value);
  console.log(postal_code.value);
});
