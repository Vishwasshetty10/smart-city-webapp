
const destinations = [
  {
    name: "India",
    description: "A vibrant land of rich culture, diverse traditions, and timeless heritage.",
    image: "https://t3.ftcdn.net/jpg/05/10/94/30/360_F_510943091_Au83xxJTZrDEv9BPrxTINE7F9ZIlxa0p.jpg"
  },
  {
    name: "France",
    description: "The city of light, love, and landmarks like the Eiffel Tower.",
    image: "https://t3.ftcdn.net/jpg/02/45/70/70/360_F_245707051_nAlkopV8DCqIUJMLnautG2pBCQi6lkwO.jpg"
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
    name: "United States",
    description: "The city that never sleeps, home to Times Square and Central Park.",
    image: "https://t3.ftcdn.net/jpg/03/34/06/44/360_F_334064485_D4AKHhAYsnFN3P2DCJyPjGRm1ZcWbBUf.jpg"
  },
  {
    name: "South Africa",
    description: "Scenic coastal city with mountains and wildlife.",
    image: "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?fm=jpg&q=60&w=3000"
  },
  {
    name: "Europe",
    description: "A culturally rich continent known for its historic cities, diverse cuisines, and stunning architecture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFvqjpdj1KNrIweAMqusXuNd2WrQaHQwYWQ&s"
  },
  {
    name: "Australia",
    description: "A land of stunning beaches, unique wildlife, and vibrant cities like Sydney and Melbourne.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?fm=jpg&q=60&w=3000"
  }
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
