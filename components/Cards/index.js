// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
    const cardEntry = document.querySelector(".cards-containe");
    Object.entries(response.data.articles).forEach((item) => {
      cardEntry.append(cardComponent(item));
    });
  })
  .catch((error) => {
    console.log(`This is a http error: ${error}`);
  });

function cardComponent(array) {
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < array.length; a++) {
      const outerCard = document.createElement("div");
      const cardHeader = document.createElement("div");
      const cardAuthor = document.createElement("div");
      const cardImgContainer = document.createElement("div");
      const cardImage = document.createElement("img");
      const cardSpan = document.createElement("span");

      outerCard.classList = "card";
      cardHeader.classList = "headline";
      cardAuthor.classList = "author";
      cardImgContainer.classList = "img-container";

      cardImage.src = array[i][1][a].authorPhoto;

      cardHeader.textContent = array[i][1][a].headline;

      cardSpan.textContent = `By ${array[i][1][a].authorName}`;

      outerCard.append(cardHeader);
      outerCard.append(cardAuthor);
      cardAuthor.append(cardImgContainer);
      cardImgContainer.append(cardImage);
      cardAuthor.append(cardSpan);
    }
  }

  return outerCard;
}
