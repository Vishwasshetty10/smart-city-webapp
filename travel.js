
const destinations = [
  {
    name: "Afghanistan",
    description: "Afghanistan is a landlocked, mountainous country in South-Central Asia known for its rich history, diverse cultures, and decades of geopolitical conflict.",
    image: "https://i.pinimg.com/736x/7a/2e/c7/7a2ec7008f206fa24cec375a03d39db4.jpg"
  },
  {
    name: "Albania",
    description: "Albania is a scenic Balkan country known for its rugged mountains, pristine beaches, and rich cultural heritage.",
    image: "https://albaniatourguide.com/wp-content/uploads/2021/03/permet-7-shutterstock-large.jpg"
  },
  {
    name: "Algeria",
    description: "Algeria is a vast North African country known for its rich cultural heritage, diverse landscapes, and significant oil and gas reserves.",
    image: "https://i.pinimg.com/736x/b6/ec/6c/b6ec6c929654939bfca49c74f3354012.jpg"
  },
  {
    name: "Andorra",
    description: "Andorra is a tiny, mountainous country nestled between France and Spain, known for its ski resorts, duty-free shopping, and stunning Pyrenees scenery.",
    image: "https://storage.googleapis.com/alicante-real-storage/images/articles/16/full.webp"
  },
  {
    name: "Angola",
    description: "Angola is a resource-rich country in Southern Africa known for its oil, diamonds, diverse culture, and post-civil war reconstruction.",
    image: "https://media.istockphoto.com/id/875150736/photo/luanda-city-seaside-from-sky.jpg?s=612x612&w=0&k=20&c=-osNpQ03JPG5jmaIjRJxY1uwOQxI0ZvQBsIxtEX6v5M="
  },
  {
    name: "Antigua and Barbuda",
    description: "Antigua and Barbuda is a twin-island Caribbean nation known for its stunning beaches, coral reefs, and vibrant culture.",
    image: "https://t3.ftcdn.net/jpg/01/01/63/42/360_F_101634281_tqs3x35WXiQ1DRuqxbHcE9n2c8UTpPJZ.jpg"
  },
  {
    name: "Argentina",
    description: "Argentina is a vibrant South American country known for its tango, rich culture, diverse landscapes, and passion for football.",
    image: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnZW50aW5hfGVufDB8fDB8fHww"
  },
  {
    name: "Armenia",
    description: "Armenia is a mountainous, landlocked country in the South Caucasus known for its ancient history, rich culture, and the world’s first Christian nation.",
    image: "https://media.istockphoto.com/id/1160098022/photo/hayravank-monastery-on-the-shores-of-lake-sevan-in-armenia.jpg?s=612x612&w=0&k=20&c=fCtO3RRJL2gaWavivHyyGygrNgZ7wj39tMuq1nOCEUI="
  },
  {
    name: "Australia",
    description: "A land of stunning beaches, unique wildlife, and vibrant cities like Sydney and Melbourne.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?fm=jpg&q=60&w=3000"
  },
  {
    name: "Austria",
    description: "Austria is a picturesque European country known for its alpine landscapes, rich cultural heritage, and classical music legacy.",
    image: "https://www.planetware.com/wpimages/2019/11/austria-in-pictures-most-beautiful-places-hallstatt.jpg"
  },
  {
    name: "Azerbaijan",
    description: "Azerbaijan is a vibrant country at the crossroads of Europe and Asia, known for its rich cultural heritage, modern architecture, and the Caspian Sea coastline.",
    image: "https://www.shutterstock.com/image-photo/bright-nights-baku-capital-azerbaijan-600nw-2458029745.jpg"
  },
  {
    name: "Bahamas",
    description: "The Bahamas is a tropical paradise of 700 islands known for its crystal-clear waters, white-sand beaches, and vibrant marine life.",
    image: "https://media.istockphoto.com/id/1167614916/photo/colourful-houses-in-nassau.jpg?s=612x612&w=0&k=20&c=hGx5M0Rk3SFRKHUAOULHGMXapqzUwg79BwiyfE7h8ic="
  },
  {
    name: "Bahrain",
    description: "Bahrain is a small, oil-rich island nation in the Persian Gulf known for its modern skyline, rich history, and vibrant finance and tourism sectors.",
    image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/10/03/4032506-2023232997.jpg?itok=Kn0v-a2P"
  },
  {
    name: "Europe",
    description: "A culturally rich continent known for its historic cities, diverse cuisines, and stunning architecture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFvqjpdj1KNrIweAMqusXuNd2WrQaHQwYWQ&s"
  },
  {
    name: "France",
    description: "The city of light, love, and landmarks like the Eiffel Tower.",
    image: "https://t3.ftcdn.net/jpg/02/45/70/70/360_F_245707051_nAlkopV8DCqIUJMLnautG2pBCQi6lkwO.jpg"
  },
  {
    name: "India",
    description: "A vibrant land of rich culture, diverse traditions, and timeless heritage.",
    image: "https://t3.ftcdn.net/jpg/05/10/94/30/360_F_510943091_Au83xxJTZrDEv9BPrxTINE7F9ZIlxa0p.jpg"
  },
  
  {
    name: "Indonesia",
    description: "Tropical paradise with beaches, temples, and rice terraces.",
    image: "https://static.vecteezy.com/system/resources/previews/026/850/295/non_2x/beautiful-temple-in-bali-indonesia-generated-by-ai-free-photo.jpg"
  },
  {
    name: "Japan",
    description: "Japan's capital, blending tradition with technology.",
    image: "https://img.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "South Africa",
    description: "Scenic coastal city with mountains and wildlife.",
    image: "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?fm=jpg&q=60&w=3000"
  },
  {
    name: "United States",
    description: "The city that never sleeps, home to Times Square and Central Park.",
    image: "https://t3.ftcdn.net/jpg/03/34/06/44/360_F_334064485_D4AKHhAYsnFN3P2DCJyPjGRm1ZcWbBUf.jpg"
  },  
];

const container = document.getElementById('destinationList');
const searchBox = document.getElementById('searchBox');

function displayDestinations(list) {
  container.innerHTML = '';
  list.forEach((place, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${0.2 * (index + 1)}s`;
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" />
      <div class="card-content">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

displayDestinations(destinations);

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  const filtered = destinations.filter(dest =>
    dest.name.toLowerCase().includes(query)
  );
  displayDestinations(filtered);
});
