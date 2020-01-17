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
    const cardEntry = document.querySelector(".cards-container");
    //console.log(response);
    const newDataArray = Object.entries(response.data.articles);
    //console.log(newDataArray);
    newDataArray.forEach((theOnes) => {
      const allTopicArray = theOnes[1];
      //console.log(allTopicArray);
      allTopicArray.forEach((item) => {
        cardEntry.append(cardComponent(item));
      });
    });
  })
  .catch((error) => {
    console.log(`This is a http error: ${error}`);
  });

function cardComponent(obj) {
  var outerCard = document.createElement("div");
  var cardHeader = document.createElement("div");
  var cardAuthor = document.createElement("div");
  var cardImgContainer = document.createElement("div");
  var cardImage = document.createElement("img");
  cardSpan = document.createElement("span");

  outerCard.classList = "card";
  cardHeader.classList = "headline";
  cardAuthor.classList = "author";
  cardImgContainer.classList = "img-container";

  cardImage.src = obj.authorPhoto;

  cardHeader.textContent = obj.headline;

  cardSpan.textContent = `By ${obj.authorName}`;

  outerCard.append(cardHeader);
  outerCard.append(cardAuthor);
  cardAuthor.append(cardImgContainer);
  cardImgContainer.append(cardImage);
  cardAuthor.append(cardSpan);

  return outerCard;
}
