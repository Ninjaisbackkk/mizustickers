let imageArray = [
  { name: "Zoro",desc:"Cool Character", image: "./images/Zoro.jpg" },
  { name: "Minion",desc:"Banana is life", image: "./images/minion.jpg" },
  { name: "Madara",desc:"Greatest villain.", image: "./images/Madara.jpg" },
  { name: "Demon Slayer fan",desc:"Hard nigga boy.", image: "./images/Tanjuro.jpg" },
  { name: "Terrorblade",desc:"Fearsome Dota 2 character.", image: "./images/Terrorblade.jpg" },
  { name: "Fanny Aspirant",desc:"Mlbb character.", image: "./images/Fanny.jpg" },
  { name: "Zeref",desc:"IMMORTAL CHARACTER.", image: "./images/Zeref.jpg" },
  { name: "Solo Leveling",desc:"Bros doing solo push or go home.", image: "./images/Solo.jpg" },
  { name: "Jujutsu Kaisen",desc:"Wonderful sticker for laptop.", image: "./images/kaisen.jpg" }
];

function displayfunction(image){
    const items = `
    <div class="col-md-4 mb-2" style="overflow: hidden;">
          <div class="card">
            <img src="${image.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${image.name}</h5>
              <p class="card-text">${image.desc}</p>
              <a href="#" class="btn btn-primary">Buy It</a>
              <a href="#" class="btn btn-info">Add to cart</a>
            </div>
          </div>
        </div>
    `;

    var row = document.getElementById('row');
    row.innerHTML += items;
}
imageArray.forEach(displayfunction);
