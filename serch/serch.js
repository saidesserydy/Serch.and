const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// fetch grabs endpoint - at this point a promise and genertes readablestram
fetch (endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));


function findMatches(keyword, cities) {
    return cities.filter(place =>{
        // does city or state match? use paramater reges
        const regex = new RegExp(keyword, 'gi');
        return place.state.match(regex)    
    });
} 
// add results to HTML li
function displayMatches() {
    const matchArray = findMatches(this.value,cities)
    const html = matchArray.map(place => {

        const regex = new RegExp(this.value, 'gi');
        const cityName =  place.city.replace(regex,
      `<span class="highlight">${this.value}</span>` );
      const stateName =
      place.state.replace(regex, `<span
      class="hl">${this.value}</span>`); 
        return`
        <li id=${place.state} onclick="fun(this.id)">
        <span class="name">${cityName},

          <span>
       class="population">${place.population}</span> 
       </il>    
        `;    
            
    }).join("");
    suggestions.innerHTML = html;
}

function fun (event) {
  searchInput.value = event;
}
 const searchInput = 
 document.querySelector('.search-input');
 const suggestions =
 document.querySelector('.suggestions');

 searchInput.addEventListener('change', displayMatches);
 searchInput.addEventListener('keyup', displayMatches);

  

