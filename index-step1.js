$(document).ready(main);

// Fonction principale
function main(){
	function clickValider(){
	
		
			var contenu = $("input").val();
			var nombremystere = 7;

		if(contenu == nombremystere){
			alert("Gagne");
		}else{
			alert("Perdu");
		};
	
	};
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon,
			// Afficher une alert Perdu


	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
$("button").click(clickValider);

}

