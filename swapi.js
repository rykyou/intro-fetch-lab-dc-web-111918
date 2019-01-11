document.addEventListener("DOMContentLoaded", main)

function main() {
  grabCrawlButton().addEventListener('click', getOpeningCrawl);

  getPlanetNumber();
  getPlanet();
}


function grabCrawlButton() {
  return document.getElementById('crawlBtn');
}

function getOpeningCrawl() {
  let crawlDiv = document.getElementById('crawlDiv');

  fetch('https://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(json => {
      crawlDiv.innerText = json["opening_crawl"]
    });
}

function grabPlanetForm() {
  return document.getElementById('planetForm');
}

function getPlanetNumber() {

  return grabPlanetForm().addEventListener('submit', (e) => {
    e.preventDefault();

    let planetData = document.getElementById('planetData');
    // console.log(e.target[0].value)
    fetch(`https://swapi.co/api/planets/${e.target[0].value}/`)
      .then(result => result.json())
      .then(json => {
        planetData.innerText = `
          Name: ${json['name']}
          Climate: ${json['climate']}
        `;
      })
  });

}

// function getPlanet() {
//   // console.log(getPlanetNumber)
//   console.log(`http://swapi.co/api/planets/${getPlanetNumber()}`)
// }
