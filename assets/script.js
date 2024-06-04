const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* initialisation des variables */
let currentImage = 0;
const slideImage = document.getElementsByClassName("banner-img")[0];
const slideText = document.getElementById("slider-text");
const arrows = document.getElementsByClassName("arrow");

/* définition de l'image et du texte */
function setSlide(id){
	
	slideImage.src = 'assets/images/slideshow/'+slides[id]["image"];
	slideText.innerHTML = slides[id]["tagLine"];

	dotNavigation(currentImage);
}

/* sélection du point correspondant a la slide actuelle */
function dotNavigation(id){
	document.getElementsByClassName("dot_selected")[0].className = "dot";
	document.getElementById("dot-"+id).className = "dot dot_selected";
}

/* on exécute la fonction pour la premiere slide */
setSlide(currentImage);

/* on ajoute des évenements sur chaque fléche */
for (let index = 0; index < arrows.length; index++) {
	let arrow = arrows[index];

	arrow.addEventListener("click", () => {
		if(arrow.className.includes("arrow_left")){
			currentImage -= 1;
			if(currentImage == -1){
				currentImage = 3;
			}
		}else{
			currentImage += 1;
			if(currentImage == 4){
				currentImage = 0;
			}
		}

		setSlide(currentImage);
	})
}
	
