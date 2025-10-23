const search_btn = document.getElementById("search-button");
const city = document.getElementById("city-input");
const search_results = document.getElementById("search_results");
const result_template = document.querySelector(".result");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  search_results.classList.add("hidden");
  search_results.innerHTML = "";

  search_string =
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=CvGYc7b4DklqeRQKwQ2CQOVq6CX1AAK9";

  if (city.value !== "") {
    search_string += "&city=" + city.value;
  }

  fetch(search_string).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: $:{response.status}`);
    }
    return response
      .json()
      .then((data) => {
        const {
          _embedded: { events },
        } = data;

        for (const e of events) {
          fillEvent(e);
        }
        search_results.classList.remove("hidden");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
});

function fillEvent(e) {
  const el = result_template.cloneNode(true);
  el.classList.remove("hidden");

  const img_el = el.querySelector(".event-img").querySelector("img");
  const header_el = el.querySelector(".event-text").querySelector("h1");
  const date_el = el.querySelector(".event-text").querySelector("p");
  const link_el = el.querySelector(".event-text").querySelector("a");

  header_el.textContent = e.name;
  date_el.textContent = "Start Date: " + e.dates.start.localDate;
  link_el.href = e.url;
  img_el.src = e.images[0].url;

  search_results.appendChild(el);
}
