import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

function createHeader() {
  const header = document.createElement("header");

  const logoContainer = document.createElement("div");
  const logoImage = document.createElement("img");
  const logoName = document.createElement("span");

  logoContainer.classList.add("logo-container");
  logoImage.classList.add("logo");

  logoImage.src = "images/favicon.ico";
  logoName.innerText = "Baron Restaurant";

  header.appendChild(logoContainer);
  logoContainer.appendChild(logoImage);
  logoContainer.appendChild(logoName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  homeButton.classList.add("nav-btn");
  menuButton.classList.add("nav-btn");
  contactButton.classList.add("nav-btn");

  homeButton.innerText = "Home";
  menuButton.innerText = "Menu";
  contactButton.innerText = "Contact";

  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    renderHome();
  });

  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    renderMenu();
  });

  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    renderContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(clickedButton) {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  clickedButton.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const copyright = document.createElement("p");
  copyright.innerText = "Copyright © 2021";

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/milosmicevic";
  githubLink.innerText = "milosmicevic ";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".nav-btn"));
  renderHome();
}

export default initializeWebsite;
