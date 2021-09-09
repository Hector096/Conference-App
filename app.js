const featuredContainer = document.getElementById('featured-container');
const productContainer = document.getElementById('products-list');
const featuredContainer2 = document.getElementById('featured-container2');
const productContainer2 = document.getElementById('products-list2');
const productBtn = document.getElementById('load-product-button');
const postBtn = document.getElementById('load-postt-button');

const myProducts = [
  {
    name: 'Spices', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1588088644163-8e743bcc01ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
  },
  {
    name: 'Fruits', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80',
  },
  {
    name: 'Vegitable', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80',
  },
  {
    name: 'Oil Seeds', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1573145757298-85c8a093545d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Herbs', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1606043406175-a631b7b9ae9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
  },
  {
    name: 'Pulses', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1411&q=80',
  },
];

const myFeature = [
  {
    name: 'Times of India', intro: 'Top Publication of India', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1466386460451-cbc548bf581b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'Export of Europe', intro: 'Best Export Publication', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1525184990509-4fd44ed9e056?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
  },
  {
    name: 'World Trade Forum', intro: 'Publication on World Export', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'Hindustan Times', intro: 'Oldest Publication of India', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'New York Times', intro: 'American Global Export Publication', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1583774139366-a903e7bc5236?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=711&q=80',
  },
  {
    name: 'Bhaskar Times', intro: 'Hindi Publication of India', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imgUrl: 'https://images.unsplash.com/photo-1516179257071-71a54dbb4853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
];

const featchFeatured = (data) => {
  let featuredItem;

  for (let i = 0; i < data.length; i += 1) {
    featuredItem = ` <div class="card border-0 bg-light  mt-5" style="max-width: 540px;">
        <div class="row">
            <div class="col-6 m-auto">
                <img src=${data[i].imgUrl} class="img-fluid rounded" alt="pub${i}">
            </div>
            <div class="col-6">
                <div class="card-body">
                    <h5 class="card-title feature-title">${data[i].name}</h5>
                    <p class="feature-intro">${data[i].intro}</p>
                    <hr class="hr-border">
                    <p class="card-text feature-description">${data[i].description}</p>
                </div>
            </div>
        </div>
      </div>`;

    featuredContainer.innerHTML += featuredItem;
  }
};

const featchFeatured2 = (data, j) => {
  let featuredItem;

  for (let i = 0; i < j; i += 1) {
    featuredItem = ` <div class="card border-0 bg-light  mt-5" style="max-width: 540px;">
        <div class="row">
            <div class="col-6 m-auto">
                <img src=${data[i].imgUrl} class="img-fluid rounded" alt="pub${i}">
            </div>
            <div class="col-6">
                <div class="card-body">
                    <h5 class="card-title feature-title">${data[i].name}</h5>
                    <p class="feature-intro">${data[i].intro}</p>
                    <p class="card-text feature-description">${data[i].description}</p>
                </div>
            </div>
        </div>
      </div>`;

    featuredContainer2.innerHTML += featuredItem;
  }
};

const fetchproducts = (data) => {
  let productItem;

  for (let i = 0; i < data.length; i += 1) {
    productItem = ` <div class="col">
        <div class="card m-3 border-0">
            <img class="card-img-top" width="100%" height="200" role="img" focusable="true"
                src=${data[i].imgUrl}alt="${i}">
            <div class="card-body">
                <h3>${data[i].name}</h3>
                <p class="card-text">${data[i].description}</p>
            </div>
        </div>
      </div>`;

    productContainer.innerHTML += productItem;
  }
};
const fetchproducts2 = (data, j) => {
  let productItem;

  for (let i = 0; i < j; i += 1) {
    productItem = ` <div class="col">
        <div class="card m-3 border-0">
            <img class="card-img-top" width="100%" height="200" role="img" focusable="true"
                src=${data[i].imgUrl}alt="${i}">
            <div class="card-body">
                <h3>${data[i].name}</h3>
                <p class="card-text">${data[i].description}</p>
            </div>
        </div>
      </div>`;

    productContainer2.innerHTML += productItem;
  }
};

featchFeatured(myFeature);
fetchproducts(myProducts);
featchFeatured2(myFeature, 3);
fetchproducts2(myProducts, 3);

productBtn.onclick = () => {
  productBtn.style.display = 'none';
  productContainer2.innerHTML = '';
  fetchproducts2(myProducts, myProducts.length);
};

postBtn.onclick = () => {
  postBtn.style.display = 'none';
  featuredContainer2.innerHTML = '';
  featchFeatured2(myFeature, myFeature.length);
};