// import {htmlGenerator} from "./warmup";
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogLinks = [];
  const dogNames = Object.keys(dogs);

  dogNames.forEach(name => {
    let a = document.createElement("A");
    a.innerHTML = name;
    a.href = dogs[name];
    let li = document.createElement("LI");
    li.classList.add("dog-link");
    li.appendChild(a);
    dogLinks.push(li);
  });

  return dogLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");

  dogLinks.forEach(dog => {
    ul.appendChild(dog);
  });
}

attachDogLinks();

const dropDown = document.querySelector(".drop-down-dog-nav");
const links = document.querySelectorAll(".dog-link");

function handleEnter() {
  links.forEach(li => {
    li.classList.add("hovered-over");
  })
};

function handleLeave() {
  links.forEach(li => {
    li.classList.remove("hovered-over");
  })
};

dropDown.addEventListener("mouseenter", handleEnter);
dropDown.addEventListener("mouseleave", handleLeave);