/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  const contactContainer = document.createElement(\"div\");\n  contactContainer.classList.add(\"contact-container\");\n\n  const contactHeading = document.createElement(\"h1\");\n  const contactBody = document.createElement(\"div\");\n\n  const contactOptionOne = document.createElement(\"div\");\n  const contactOptionTwo = document.createElement(\"div\");\n  const contactOptionThree = document.createElement(\"div\");\n\n  const contactOptionOneImage = document.createElement(\"img\");\n  const contactOptionTwoImage = document.createElement(\"img\");\n  const contactOptionThreeImage = document.createElement(\"img\");\n\n  const contactOptionOneText = document.createElement(\"span\");\n  const contactOptionTwoText = document.createElement(\"span\");\n  const contactOptionThreeText = document.createElement(\"span\");\n\n  const infoMessage = document.createElement(\"p\");\n\n  contactBody.classList.add(\"contact-body\");\n\n  contactOptionOne.classList.add(\"contact-option\");\n  contactOptionTwo.classList.add(\"contact-option\");\n  contactOptionThree.classList.add(\"contact-option\");\n\n  contactHeading.innerText = \"Contact\";\n\n  contactOptionOneImage.src = \"images/contact/phone.png\";\n  contactOptionTwoImage.src = \"images/contact/email.png\";\n  contactOptionThreeImage.src = \"images/contact/adress.png\";\n\n  contactOptionOneText.innerText = \"8493-9453\";\n  contactOptionTwoText.innerText = \"baron@office.com\";\n  contactOptionThreeText.innerText = \"17 Avenue LA\";\n\n  infoMessage.innerText = \"You can send reservations by mail also!\";\n\n  contactOptionOne.appendChild(contactOptionOneImage);\n  contactOptionTwo.appendChild(contactOptionTwoImage);\n  contactOptionThree.appendChild(contactOptionThreeImage);\n\n  contactOptionOne.appendChild(contactOptionOneText);\n  contactOptionTwo.appendChild(contactOptionTwoText);\n  contactOptionThree.appendChild(contactOptionThreeText);\n\n  contactBody.appendChild(contactOptionOne);\n  contactBody.appendChild(contactOptionTwo);\n  contactBody.appendChild(contactOptionThree);\n\n  contactContainer.appendChild(contactHeading);\n  contactContainer.appendChild(contactBody);\n  contactContainer.appendChild(infoMessage);\n\n  return contactContainer;\n}\n\nfunction renderContact() {\n  const main = document.querySelector(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.classList.add(\"home-container\");\n\n  homeContainer.appendChild(createHomeIntro());\n  homeContainer.appendChild(createRestaurantAdvantages());\n\n  return homeContainer;\n}\n\nfunction createHomeIntro() {\n  const homeIntroContainer = document.createElement(\"div\");\n  const homeIntroTextContainer = document.createElement(\"div\");\n  const homeIntroImage = document.createElement(\"img\");\n\n  const homeIntroQuestion = document.createElement(\"span\");\n  const homeIntroHeading = document.createElement(\"h1\");\n  const homeIntroSpan = document.createElement(\"span\");\n\n  homeIntroContainer.classList.add(\"home-intro-container\");\n  homeIntroTextContainer.classList.add(\"home-intro-text-container\");\n\n  homeIntroHeading.classList.add(\"home-intro-heading\");\n  homeIntroSpan.classList.add(\"home-intro-highlighted\");\n\n  homeIntroQuestion.innerText = \"Are you hungry?\";\n  homeIntroHeading.innerText = \"Don't wait, visit us!\";\n  homeIntroSpan.innerText = \"Make sure why we are one of the best\";\n  homeIntroImage.src = \"images/home/chef4.png\";\n\n  homeIntroTextContainer.appendChild(homeIntroQuestion);\n  homeIntroTextContainer.appendChild(homeIntroHeading);\n  homeIntroTextContainer.appendChild(homeIntroSpan);\n\n  homeIntroContainer.appendChild(homeIntroTextContainer);\n  homeIntroContainer.appendChild(homeIntroImage);\n\n  return homeIntroContainer;\n}\n\nfunction createRestaurantAdvantages() {\n  const restaurantAdvantages = document.createElement(\"div\");\n\n  const advantageOne = document.createElement(\"div\");\n  const advantageTwo = document.createElement(\"div\");\n  const advantageThree = document.createElement(\"div\");\n\n  const advantageOneImage = document.createElement(\"img\");\n  const advantageTwoImage = document.createElement(\"img\");\n  const advantageThreeImage = document.createElement(\"img\");\n\n  advantageOneImage.src = \"images/home/restaurant.png\";\n  advantageTwoImage.src = \"images/home/waiter.png\";\n  advantageThreeImage.src = \"images/home/pets.png\";\n\n  const advantageOneText = document.createElement(\"span\");\n  const advantageTwoText = document.createElement(\"span\");\n  const advantageThreeText = document.createElement(\"span\");\n\n  advantageOneText.innerText = \"Nice Ambiance\";\n  advantageTwoText.innerText = \"Top service\";\n  advantageThreeText.innerText = \"Pet Friendly\";\n\n  restaurantAdvantages.classList.add(\"home-restaurant-advantages\");\n  advantageOne.classList.add(\"home-advantage\");\n  advantageTwo.classList.add(\"home-advantage\");\n  advantageThree.classList.add(\"home-advantage\");\n\n  advantageOne.appendChild(advantageOneImage);\n  advantageOne.appendChild(advantageOneText);\n  advantageTwo.appendChild(advantageTwoImage);\n  advantageTwo.appendChild(advantageTwoText);\n  advantageThree.appendChild(advantageThreeImage);\n  advantageThree.appendChild(advantageThreeText);\n\n  restaurantAdvantages.appendChild(advantageOne);\n  restaurantAdvantages.appendChild(advantageTwo);\n  restaurantAdvantages.appendChild(advantageThree);\n\n  return restaurantAdvantages;\n}\n\nfunction renderHome() {\n  const main = document.querySelector(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  const menuBodyContainer = document.createElement(\"div\");\n\n  menu.classList.add(\"menu-container\");\n  menuBodyContainer.classList.add(\"menu-body-container\");\n\n  menu.appendChild(createMenuHeading());\n  menu.appendChild(menuBodyContainer);\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Hamburger\",\n      \"Beef burger served in a burger bun with cheese, tomato, iceberg, sour pickle, onion, fries\",\n      6.6\n    )\n  );\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Pizza\",\n      \"Peeled tomato, ham, cheese, truffle paste, cherry tomato, crispy bacon\",\n      5.4\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Taco\",\n      \"Taco filled with minced beef meat, cheddar cheese, avocado, jalapeño\",\n      5.2\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Wrap\",\n      \"Gyros chicken, spicy mayonnaise, bbq sauce, cabbage, tomatoes, fried onions\",\n      4.8\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Hot-Dog\",\n      \"Grilled sausage served in the slit of a partially sliced bun with mustard\",\n      3.2\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\"Steak\", \"Beef steak, grilled vegetables, toast\", 10.3)\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Sausages\",\n      \"Grilled sausages with cheese, mashed potatoes, mustart, sour pickle\",\n      5\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\"Trout\", \"Trout, young potatoes, vitamin salad\", 9)\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Prawns\",\n      \"Risotto with prawns,broccoli, corn, peeled tomato, parsley\",\n      8.4\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Chicken-Rice\",\n      \"Risotto with sauteed chicken, porcini mushrooms and leeks\",\n      7.9\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\"Maize-Porridge\", \"Corn flour, kajmak, feta cheese\", 3.7)\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\"Omlette\", \"Ham-vegetable-bacon\", 3.1)\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Caesar-Salad\",\n      \"Iceberg lettuce, cherry tomatoes, chicken, bacon, croutons, caesar dressing\",\n      5.3\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\n      \"Greek-Salad\",\n      \"Tomatoes, cucumbers. peppers, onions, feta, olive oil, olives, oregano\",\n      4.9\n    )\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\"Nachos\", \"Served with two salsa as desired\", 2)\n  );\n\n  menuBodyContainer.appendChild(\n    createMenuItem(\"French-Fries\", \"Thin pieces of potato fried in oil\", 1.4)\n  );\n\n  return menu;\n}\n\nfunction createMenuHeading() {\n  const menuHeadingContainer = document.createElement(\"div\");\n  const menuHeading = document.createElement(\"h1\");\n\n  menuHeadingContainer.classList.add(\"menu-heading-container\");\n\n  menuHeading.innerText = \"Menu\";\n\n  menuHeadingContainer.appendChild(menuHeading);\n\n  return menuHeadingContainer;\n}\n\nfunction createMenuItem(title, description, price) {\n  const menuItem = document.createElement(\"div\");\n  const mealPresentation = document.createElement(\"div\");\n  const mealInfo = document.createElement(\"div\");\n  const mealImageContainer = document.createElement(\"div\");\n  const mealAdditionalInformations = document.createElement(\"div\");\n  const mealTitle = document.createElement(\"h3\");\n  const mealImage = document.createElement(\"img\");\n  const mealDescription = document.createElement(\"span\");\n  const mealPrice = document.createElement(\"span\");\n\n  menuItem.classList.add(\"menu-item\");\n  mealPresentation.classList.add(\"meal-presentation\");\n  mealAdditionalInformations.classList.add(\"meal-additional-informations\");\n\n  mealTitle.innerText = title;\n  mealImage.src = `images/menu/${title.toLowerCase()}.png`;\n  mealDescription.innerText = description;\n  mealPrice.innerText = `Price: ${price}$`;\n\n  mealInfo.appendChild(mealTitle);\n  mealInfo.appendChild(mealDescription);\n  mealImageContainer.appendChild(mealImage);\n\n  mealPresentation.appendChild(mealInfo);\n  mealPresentation.appendChild(mealImageContainer);\n  mealAdditionalInformations.appendChild(mealPrice);\n\n  menuItem.appendChild(mealPresentation);\n  menuItem.appendChild(mealAdditionalInformations);\n\n  return menuItem;\n}\n\nfunction renderMenu() {\n  const main = document.querySelector(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n\n  const logoContainer = document.createElement(\"div\");\n  const logoImage = document.createElement(\"img\");\n  const logoName = document.createElement(\"span\");\n\n  logoContainer.classList.add(\"logo-container\");\n  logoImage.classList.add(\"logo\");\n\n  logoImage.src = \"images/favicon.ico\";\n  logoName.innerText = \"Baron Restaurant\";\n\n  header.appendChild(logoContainer);\n  logoContainer.appendChild(logoImage);\n  logoContainer.appendChild(logoName);\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n\n  const homeButton = document.createElement(\"button\");\n  const menuButton = document.createElement(\"button\");\n  const contactButton = document.createElement(\"button\");\n\n  homeButton.classList.add(\"nav-btn\");\n  menuButton.classList.add(\"nav-btn\");\n  contactButton.classList.add(\"nav-btn\");\n\n  homeButton.innerText = \"Home\";\n  menuButton.innerText = \"Menu\";\n  contactButton.innerText = \"Contact\";\n\n  homeButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(homeButton);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  menuButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(menuButton);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  contactButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(contactButton);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  nav.appendChild(homeButton);\n  nav.appendChild(menuButton);\n  nav.appendChild(contactButton);\n\n  return nav;\n}\n\nfunction setActiveButton(clickedButton) {\n  const buttons = document.querySelectorAll(\".nav-btn\");\n  buttons.forEach((button) => {\n    button.classList.remove(\"active\");\n  });\n\n  clickedButton.classList.add(\"active\");\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n\n  const copyright = document.createElement(\"p\");\n  copyright.innerText = \"Copyright © 2021\";\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.href = \"https://github.com/milosmicevic\";\n  githubLink.innerText = \"milosmicevic \";\n\n  const githubIcon = document.createElement(\"i\");\n  githubIcon.classList.add(\"fab\");\n  githubIcon.classList.add(\"fa-github\");\n\n  githubLink.appendChild(githubIcon);\n  footer.appendChild(copyright);\n  footer.appendChild(githubLink);\n\n  return footer;\n}\n\nfunction initializeWebsite() {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(createHeader());\n  content.appendChild(createMain());\n  content.appendChild(createFooter());\n\n  setActiveButton(document.querySelector(\".nav-btn\"));\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;