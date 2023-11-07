const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


  
  // Trovare elemento "items" nella pagina
  const itemsElem = document.querySelector(".items");
  console.log(itemsElem);
  
  // Scorrere array, per ogni elemento
  // Creare Il div con immagine e aggiungiamo ad una stringa
  let imagesString = "";
  for (let i = 0; i < images.length; i++) {
    imagesString += `
        <div class="item">
     <img src="img/${images.image}" alt="">
    </div>`;
  }
  
  console.log(imagesString);
  
  // Aggiungere la stringa contenente tutti i div con le immagini all'interno dell'elemtno "items"
  itemsElem.innerHTML = itemsElem.innerHTML + imagesString;
  
  // Impostare lo stato iniziale dello slide
  let currentIndex = 0; // indica indice di elemento visibile in questo momento
  const slideElems = document.querySelectorAll(".item");
  slideElems[currentIndex].classList.add("active");
  
  // Gestione di slider al click next
  document.querySelector(".next").addEventListener("click", function () {
    // Se indice è minore (slideElem.lenght - 1)
    // togliere la classe active dall'elemento corrente
    // incrementare indice corrente
    // aggiungere classe active al nuovo elemento corrente
  
    //         3
    slideElems[currentIndex].classList.remove("active");
    //    3 < 3
    if (currentIndex < slideElems.length - 1) {
      currentIndex++;
    } else {
      // 0
      currentIndex = 0;
    }
    //          0
    slideElems[currentIndex].classList.add("active");
  });
  
  document.querySelector(".prev").addEventListener("click", function() {
      slideElems[currentIndex].classList.remove("active");
      if(currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = slideElems.length - 1;
      }
      slideElems[currentIndex].classList.add("active");
  })
  
  


































/*
const leftSlider = document.getElementById("left");
const rightSlider = document.getElementById("right");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");
infoTitle.innerHTML = images[0].title;
infoText.innerHTML = images[0].text;

// slider left ciclo for per aggiungere l'immagine

for (i = 0; i < images.length; i++) {
  const singleImg = document.createElement("img");
  singleImg.src = `img/${images[i].image}`;
  singleImg.classList.add("left-img");

  if (i === 0) {
    singleImg.classList.add("active");
  }

  leftSlider.append(singleImg);
}

// slider right ciclo for per aggiungere l'immagine

for (i = 0; i < images.length; i++) {
  const singleImg = document.createElement("img");
  singleImg.src = `img/${images[i].image}`;
  singleImg.classList.add("right-img");

  if (i === 0) {
    singleImg.classList.add("selected");
  }
  rightSlider.append(singleImg);
}

//
let currentImg = 0;
const listLeftImg = document.querySelectorAll(".left-img");
const listRightImg = document.querySelectorAll(".right-img");

const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

function next() {
  listLeftImg[currentImg].classList.remove("active");
  listRightImg[currentImg].classList.remove("selected");

  currentImg++;

  if (currentImg === images.length) {
    currentImg = 0;
  }

  listLeftImg[currentImg].classList.add("active");
  listRightImg[currentImg].classList.add("selected");
  infoTitle.innerHTML = images[currentImg].title;
  infoText.innerHTML = images[currentImg].text;
}

function previous() {
  listLeftImg[currentImg].classList.remove("active");
  listRightImg[currentImg].classList.remove("selected");

  if (currentImg === 0) {
    currentImg = images.length;
  }

  currentImg--;

  listLeftImg[currentImg].classList.add("active");
  listRightImg[currentImg].classList.add("selected");
  infoTitle.innerHTML = images[currentImg].title;
  infoText.innerHTML = images[currentImg].text;
}

downButton.addEventListener("click", function () {
  next();
});

upButton.addEventListener("click", function () {
  previous();
});

//const autoSlide = setInterval(next, 3000);
*/
