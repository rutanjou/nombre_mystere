$(document).ready(main);
 
// Fonction principale
function main(){
    var tenta = 3;
    alert("vous avez "+ tenta +" tentatives");
 	
 	var aleatoire = parseInt(Math.random()*(20-10)+10);
 	console.log(aleatoire);

 	function demarrerPartie(){
 		tenta = 4;
 		aleatoire = parseInt(Math.random()*(20-10)+10);
        console.log(aleatoire);

 	};
 	function partieGagnee(){
 		$("#ten").text(--tenta);
        return demarrerPartie();
 	};
    function partiePerdue(){
    	$("#ten").text(--tenta);
    	if(tenta <= 0){
    		alert("Fin partie");
    		return demarrerPartie();
    	};
    };


	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	function clickValider(){
    	var contenu = $("input").val();
    	console.log(contenu);
    	    	
    	if(contenu === aleatoire){
    		alert("Gagné");
    		return demarrerPartie();

    	}else if(contenu > aleatoire){
    		alert("Perdu,votre nombre est trop grand");
    	
    		return partiePerdue();
    	}else if(contenu < aleatoire){
    		alert("Perdu, votre nombre est trop petit");
    	
    		return partiePerdue();
    	}else{ 
    		alert("Perdu");
    		return partiePerdue();
    	};
    	};
   



    	


    $("button").click(function(){
    	clickValider();
    });
   
	


	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
			*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 */
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}