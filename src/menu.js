function createMenu() {
  const menu = document.createElement("div");
  const menuBodyContainer = document.createElement("div");

  menu.classList.add("menu-container");
  menuBodyContainer.classList.add("menu-body-container");

  menu.appendChild(createMenuHeading());
  menu.appendChild(menuBodyContainer);

  menuBodyContainer.appendChild(
    createMenuItem(
      "Hamburger",
      "Beef burger served in a burger bun with cheese, tomato, iceberg, sour pickle, onion, fries",
      6.6
    )
  );
  menuBodyContainer.appendChild(
    createMenuItem(
      "Pizza",
      "Peeled tomato, ham, cheese, truffle paste, cherry tomato, crispy bacon",
      5.4
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Taco",
      "Taco filled with minced beef meat, cheddar cheese, avocado, jalapeño",
      5.2
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Wrap",
      "Gyros chicken, spicy mayonnaise, bbq sauce, cabbage, tomatoes, fried onions",
      4.8
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Hot-Dog",
      "Grilled sausage served in the slit of a partially sliced bun with mustard",
      3.2
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem("Steak", "Beef steak, grilled vegetables, toast", 10.3)
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Sausages",
      "Grilled sausages with cheese, mashed potatoes, mustart, sour pickle",
      5
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem("Trout", "Trout, young potatoes, vitamin salad", 9)
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Prawns",
      "Risotto with prawns,broccoli, corn, peeled tomato, parsley",
      8.4
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Chicken-Rice",
      "Risotto with sauteed chicken, porcini mushrooms and leeks",
      7.9
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem("Maize-Porridge", "Corn flour, kajmak, feta cheese", 3.7)
  );

  menuBodyContainer.appendChild(
    createMenuItem("Omlette", "Ham-vegetable-bacon", 3.1)
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Caesar-Salad",
      "Iceberg lettuce, cherry tomatoes, chicken, bacon, croutons, caesar dressing",
      5.3
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem(
      "Greek-Salad",
      "Tomatoes, cucumbers. peppers, onions, feta, olive oil, olives, oregano",
      4.9
    )
  );

  menuBodyContainer.appendChild(
    createMenuItem("Nachos", "Served with two salsa as desired", 2)
  );

  menuBodyContainer.appendChild(
    createMenuItem("French-Fries", "Thin pieces of potato fried in oil", 1.4)
  );

  return menu;
}

function createMenuHeading() {
  const menuHeadingContainer = document.createElement("div");
  const menuHeading = document.createElement("h1");

  menuHeadingContainer.classList.add("menu-heading-container");

  menuHeading.innerText = "Menu";

  menuHeadingContainer.appendChild(menuHeading);

  return menuHeadingContainer;
}

function createMenuItem(title, description, price) {
  const menuItem = document.createElement("div");
  const mealPresentation = document.createElement("div");
  const mealInfo = document.createElement("div");
  const mealImageContainer = document.createElement("div");
  const mealAdditionalInformations = document.createElement("div");
  const mealTitle = document.createElement("h3");
  const mealImage = document.createElement("img");
  const mealDescription = document.createElement("span");
  const mealPrice = document.createElement("span");

  menuItem.classList.add("menu-item");
  mealPresentation.classList.add("meal-presentation");
  mealAdditionalInformations.classList.add("meal-additional-informations");

  mealTitle.innerText = title;
  mealImage.src = `images/menu/${title.toLowerCase()}.png`;
  mealDescription.innerText = description;
  mealPrice.innerText = `Price: ${price}$`;

  mealInfo.appendChild(mealTitle);
  mealInfo.appendChild(mealDescription);
  mealImageContainer.appendChild(mealImage);

  mealPresentation.appendChild(mealInfo);
  mealPresentation.appendChild(mealImageContainer);
  mealAdditionalInformations.appendChild(mealPrice);

  menuItem.appendChild(mealPresentation);
  menuItem.appendChild(mealAdditionalInformations);

  return menuItem;
}

function renderMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default renderMenu;
