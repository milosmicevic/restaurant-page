function createContact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactHeading = document.createElement("h1");
  const contactBody = document.createElement("div");

  const contactOptionOne = document.createElement("div");
  const contactOptionTwo = document.createElement("div");
  const contactOptionThree = document.createElement("div");

  const contactOptionOneImage = document.createElement("img");
  const contactOptionTwoImage = document.createElement("img");
  const contactOptionThreeImage = document.createElement("img");

  const contactOptionOneText = document.createElement("span");
  const contactOptionTwoText = document.createElement("span");
  const contactOptionThreeText = document.createElement("span");

  const infoMessage = document.createElement("p");

  contactBody.classList.add("contact-body");

  contactOptionOne.classList.add("contact-option");
  contactOptionTwo.classList.add("contact-option");
  contactOptionThree.classList.add("contact-option");

  contactHeading.innerText = "Contact";

  contactOptionOneImage.src = "images/contact/phone.png";
  contactOptionTwoImage.src = "images/contact/email.png";
  contactOptionThreeImage.src = "images/contact/adress.png";

  contactOptionOneText.innerText = "8493-9453";
  contactOptionTwoText.innerText = "baron@office.com";
  contactOptionThreeText.innerText = "17 Avenue LA";

  infoMessage.innerText = "You can send reservations by mail also!";

  contactOptionOne.appendChild(contactOptionOneImage);
  contactOptionTwo.appendChild(contactOptionTwoImage);
  contactOptionThree.appendChild(contactOptionThreeImage);

  contactOptionOne.appendChild(contactOptionOneText);
  contactOptionTwo.appendChild(contactOptionTwoText);
  contactOptionThree.appendChild(contactOptionThreeText);

  contactBody.appendChild(contactOptionOne);
  contactBody.appendChild(contactOptionTwo);
  contactBody.appendChild(contactOptionThree);

  contactContainer.appendChild(contactHeading);
  contactContainer.appendChild(contactBody);
  contactContainer.appendChild(infoMessage);

  return contactContainer;
}

function renderContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default renderContact;
