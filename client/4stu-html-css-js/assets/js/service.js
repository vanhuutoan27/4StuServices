const product = [
  {
    id: 0,
    image: './assets/img/Logo.svg',
    title: 'Service Name 1',
    price: 120,
  },
  {
    id: 1,
    image: './assets/img/Logo.svg',
    title: 'Service Name 2',
    price: 60,
  },
  {
    id: 2,
    image: './assets/img/Logo.svg',
    title: 'Service Name 3',
    price: 230,
  },
  {
    id: 3,
    image: './assets/img/Logo.svg',
    title: 'Service Name 4',
    price: 100,
  },
  {
    id: 4,
    image: './assets/img/Logo.svg',
    title: 'Service Name 5',
    price: 230,
  },
  {
    id: 5,
    image: './assets/img/Logo.svg',
    title: 'Service Name 6',
    price: 100,
  },
  {
    id: 6,
    image: './assets/img/Logo.svg',
    title: 'Service Name 7',
    price: 200,
  },
  {
    id: 7,
    image: './assets/img/Logo.svg',
    title: 'Service Name 8',
    price: 50,
  },
  {
    id: 8,
    image: './assets/img/Logo.svg',
    title: 'Service Name 9',
    price: 500,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById('service-list').innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>${price}.000 VND</h2>
                <button>View Details</button>
                </div>
            </div>
            `;
    })
    .join('');
};
displayItem(categories);
