$(document).ready(pied);

// Fonction principale
function pied(){
	function clickValider(){
		var contenu = $("input").val();
		var ENTIER = 5;
		if (contenu == ENTIER) {

        alert("Gagné");
		}else if(contenu > ENTIER ){
		alert("Perdu,votre nombre est trop grand");
		}else if(contenu < ENTIER){
	    alert("Perdu, votre nombre est trop petit");
		}else{
			alert("Perdu");
		};



		};

		$("button").click(clickValider);


	};

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Stocker un nombre ENTIER généré "aléatoirement"

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


