
// -----------------------------------------------PALINDROME-------------------------------------------- //

// Initialisation de la variable qui stockera le boutton
let palindBtn = document.getElementById("palindBtn");

// Ajout d'un écouteur d'événement "click" sur le bouton "submitButton"
palindBtn.addEventListener("click",function(){
  palind();
});

// -----------------------------------------------Function-------------------------------------------- //
// Déclaration de la fonction "palind"

function palind() {
  // Récupération de la valeur saisie dans l'élément HTML avec l'ID "txtFormPal"
  let phrase = document.getElementById("txtPal").value;
  let phraseModif = phrase;
  // Vérifie si l'élément existe et si la chaîne est vide
  if (!phrase || !phrase.trim()) {
    alert("Veuillez entrer une phrase avant de continuer");
    return;
  }

  // Traitement sur la chaîne de caractères

  // Convertie en Majuscule
  phraseModif = phraseModif.toUpperCase();

  // Supprime les ponctuation et symboles
  phraseModif = phraseModif.replace(/[^\w\s]/g, "");

  // Supprime les espaces
  phraseModif = phraseModif.replace(/\s/g, "");

  // Fin du traitement

  // Divise la chaîne en un tableau de caractères
  let caracteres = phraseModif.split("");
  // Inverse l'ordre des caractères dans le tableau
  let phraseInverse = caracteres.reverse();

  // Vérification si la phrase est un palindrome ou non
  if (phraseModif === phraseInverse.join("")) {
    // Affichage d'un message si la phrase est un palindrome
    alert(phrase + " est donc un Palindrome");
  } else {
    // Affichage d'un message si la phrase n'est pas un palindrome
    alert(phrase + " n'est donc pas un Palindrome");
  }
}
// -----------------------------------------------PALINDROME-------------------------------------------- //