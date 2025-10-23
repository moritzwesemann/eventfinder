const search_btn = document.getElementById("search-button");
const city = document.getElementById("city-input");
const postal_code = document.getElementById("postal-input");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(city.value);
  console.log(postal_code.value);

  search_string =
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=CvGYc7b4DklqeRQKwQ2CQOVq6CX1AAK9";

  if (city.value !== "") {
    search_string += "&city=" + city.value;
  }
  if (postal_code.value !== "") {
    search_string += "&postalCode=" + postal_code.value;
  }

  fetch(search_string).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: $:{response.status}`);
    }
    return response
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
});
