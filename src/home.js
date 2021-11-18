function createHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  homeContainer.appendChild(createHomeIntro());
  homeContainer.appendChild(createRestaurantAdvantages());

  return homeContainer;
}

function createHomeIntro() {
  const homeIntroContainer = document.createElement("div");
  const homeIntroTextContainer = document.createElement("div");
  const homeIntroImage = document.createElement("img");

  const homeIntroQuestion = document.createElement("span");
  const homeIntroHeading = document.createElement("h1");
  const homeIntroSpan = document.createElement("span");

  homeIntroContainer.classList.add("home-intro-container");
  homeIntroTextContainer.classList.add("home-intro-text-container");

  homeIntroHeading.classList.add("home-intro-heading");
  homeIntroSpan.classList.add("home-intro-highlighted");

  homeIntroQuestion.innerText = "Are you hungry?";
  homeIntroHeading.innerText = "Don't wait, visit us!";
  homeIntroSpan.innerText = "Make sure why we are one of the best";
  homeIntroImage.src = "images/home/chef4.png";

  homeIntroTextContainer.appendChild(homeIntroQuestion);
  homeIntroTextContainer.appendChild(homeIntroHeading);
  homeIntroTextContainer.appendChild(homeIntroSpan);

  homeIntroContainer.appendChild(homeIntroTextContainer);
  homeIntroContainer.appendChild(homeIntroImage);

  return homeIntroContainer;
}

function createRestaurantAdvantages() {
  const restaurantAdvantages = document.createElement("div");

  const advantageOne = document.createElement("div");
  const advantageTwo = document.createElement("div");
  const advantageThree = document.createElement("div");

  const advantageOneImage = document.createElement("img");
  const advantageTwoImage = document.createElement("img");
  const advantageThreeImage = document.createElement("img");

  advantageOneImage.src = "images/home/restaurant.png";
  advantageTwoImage.src = "images/home/waiter.png";
  advantageThreeImage.src = "images/home/pets.png";

  const advantageOneText = document.createElement("span");
  const advantageTwoText = document.createElement("span");
  const advantageThreeText = document.createElement("span");

  advantageOneText.innerText = "Nice Ambiance";
  advantageTwoText.innerText = "Top service";
  advantageThreeText.innerText = "Pet Friendly";

  restaurantAdvantages.classList.add("home-restaurant-advantages");
  advantageOne.classList.add("home-advantage");
  advantageTwo.classList.add("home-advantage");
  advantageThree.classList.add("home-advantage");

  advantageOne.appendChild(advantageOneImage);
  advantageOne.appendChild(advantageOneText);
  advantageTwo.appendChild(advantageTwoImage);
  advantageTwo.appendChild(advantageTwoText);
  advantageThree.appendChild(advantageThreeImage);
  advantageThree.appendChild(advantageThreeText);

  restaurantAdvantages.appendChild(advantageOne);
  restaurantAdvantages.appendChild(advantageTwo);
  restaurantAdvantages.appendChild(advantageThree);

  return restaurantAdvantages;
}

function renderHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default renderHome;
