const featuredContainer = document.getElementById('featured-container');
const featuredContainer2 = document.getElementById('featured-container2');
const postBtn = document.getElementById('load-post-button');

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

featchFeatured(myFeature);
featchFeatured2(myFeature, 3);

postBtn.onclick = () => {
  postBtn.style.display = 'none';
  featuredContainer2.innerHTML = '';
  featchFeatured2(myFeature, myFeature.length);
};