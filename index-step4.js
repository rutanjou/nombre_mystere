/*## Step 4
* Avant de commencer, donner la possiblité de choisir le nombre de tentatives
* Avant de commencer, choisir les valeurs minimale etm aximale du nombre que l'ordinateur va choisir.
*/
$(document).ready(main);
 var vie;
 var aleatoire;
// Fonction principale
function main(){
	function reset(){
    vie = parseInt(prompt("Selectionner un nombre de vies"));
    $("span").text(vie);
    var max = parseInt(prompt("Selectionner un nombre max"));
    var min = parseInt(prompt("Selectionner un nombre min"));
    aleatoire = Math.floor(Math.random()*(max-min+1))+min;
    /*if(vie <= 0){
    	alert("fin partie!");*/

    

}

	function demarrerPartie(){
 		vie = 4;
 		aleatoire = parseInt(Math.random()*(20-10)+10);
        console.log(aleatoire);

 	};

	
 	function partieGagnee(message){
 		alert(message);
 		reset();

         	}
    function partiePerdue(message){
    	alert(message);
    	$("span").text(--vie);
    	if(vie <= 0){
    		alert("Fin partie");
    		return demarrerPartie();
    	}
     	}
    

    function clickValider(){
    	var contenu = $("input").val();

    	if (contenu === aleatoire){
    		partieGagnee("Vous avez gagné!");
    	}
    	else if(contenu < aleatoire){
    		partiePerdue("Perdu, votre nombre est trop petit");
    	}
    	else {
    		partiePerdue("Perdu, votre nombre est trop grand");
    	}

    	    	
    
    	}
   



    	


    $("button").click(function(){
    	clickValider();

    });
    reset();
   }



   
