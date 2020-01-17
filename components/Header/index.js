// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const outerBox = document.createElement("div");
  const boxDate = document.createElement("span");
  const boxTitle = document.createElement("h1");
  const boxTemperature = document.createElement("span");

  outerBox.classList = "header";
  boxDate.classList = "date";
  boxTemperature.classList = "temp";

  boxDate.textContent = "SMARCH 28, 2019";
  boxTitle.textContent = "Lambda Times";
  boxTemperature.textContent = "98°";

  outerBox.append(boxDate);
  outerBox.append(boxTitle);
  outerBox.append(boxTemperature);

  return outerBox;
}

//adding to Dom here
const headerEntry = document.querySelector(".header-container");

headerEntry.append(Header());
