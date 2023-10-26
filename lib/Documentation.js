
window.location.href            // retourne l'URL courante de la page
window.location.replace(xxx)    // modifie l'URL courante du navigateur


window.document.forms[0].elements[1]                // arborescence                 *** récuper le 2eme élément dans le form a l'index 0 
window.document.getElementById("pass")              // attribut id                  *** récuper l'élément qui a l'id = #pass
window.document.getElementsByName("pass")[0]        // attribut name                *** récuper le premier élément qui a le name = pass index[0] 
document.getElementsByClassName("mdp")[0]           // attribut class               *** récuper le premier élément qui a le class = mdp
document.getElementsByTagName("input")[1]           // elemnt input                 *** récuper le 2eme élément de type input
document.querySelector("#pass")                     // selecteur CSS id             *** récuper l'élément qui a l'id = #pass
document.querySelectorAll(".mdp")[0]                // selecteur CSS class          *** récuper tout les l'élément qui on class = .mdp
getComputedStyle(element)                           // récupérer les styles CSS qui sont effectivement appliqués à un élément HTML.
                                                    // Cela peut être utile pour vérifier ou modifier dynamiquement les styles d'un élément à partir de votre code JavaScript.

//-------------------------------------------------------------------//
//*Propriétés des éléments
getAttribute()  // Récupérer des attributs aux éléments HTML
setAttribute()  // Modifier ou ajouter des attributs aux éléments HTML

//-------------------------------------------------------------------//
//*Exemple modifier l'image source
let monImage = document.querySelector("#img1");
monImage.src = "xxx.jpg"; //modifier l'image source de #img1

//-------------------------------------------------------------------//
//*Récupère le contenu de l'élément dont l'id = "msg"
let msg = document.querySelector("#msg").value;
let message = document.getElementById("msg").value;

//-------------------------------------------------------------------//
//*Récupérer tous les boutons radio ayant l'attribut "name" égal à "choix"
let boutonsRadio = document.querySelectorAll('input[name="choix"]');

//-------------------------------------------------------------------//
//*Méthodes de base pour les donnée de type string
length                                                  //Retourne la longueur d'une chaîne de caractères. Ex(length sera égal à 20)

charAt(index)                                           //renvoie le caractère à l'index spécifié d'une chaîne de caractères
charCodeAt(index)                                       //renvoie le code ASCII du caractère à l'index spécifié d'une chaîne de caractères
concat(string1[, string2[, ...[, stringX]]])            //concatène une ou plusieurs chaînes de caractères à une chaîne de caractères existante
endsWith(searchString[, length])                        //vérifie si une chaîne de caractères se termine par une sous-chaîne spécifiée
includes(searchString[, position])                      //vérifie si une chaîne de caractères contient une sous-chaîne spécifiée
indexOf(searchString[, position])                       //renvoie l'index du premier caractère d'une sous-chaîne spécifiée dans une chaîne de caractères, ou -1 si la sous-chaîne n'est pas trouvée
lastIndexOf(searchString[, position])                   //renvoie l'index du dernier caractère d'une sous-chaîne spécifiée dans une chaîne de caractères, ou -1 si la sous-chaîne n'est pas trouvée
localeCompare(compareString[, locales[, options]])      //compare deux chaînes de caractères en fonction de l'ordre de tri de la locale en cours
match(regexp)                                           //exécute une recherche sur une chaîne de caractères en utilisant une expression régulière, et renvoie un tableau contenant les résultats de la recherche
repeat(count)                                           //renvoie une nouvelle chaîne de caractères composée de la chaîne de caractères en cours répétée un certain nombre de fois
replace(searchValue, replaceValue)                      //remplace toutes les occurrences d'une sous-chaîne dans une chaîne de caractères par une autre sous-chaîne
search(regexp)                                          //exécute une recherche sur une chaîne de caractères en utilisant une expression régulière, et renvoie l'index de la première occurrence trouvée
slice(start[, end])                                     //extrait une partie d'une chaîne de caractères et renvoie une nouvelle chaîne de caractères
split(separator[, limit])                               //divise une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur spécifié
startsWith(searchString[, position])                    //vérifie si une chaîne de caractères commence par une sous-chaîne spécifiée
substring(start[, end])                                 //extrait une partie d'une chaîne de caractères et renvoie une nouvelle chaîne de caractères
toLowerCase()                                           //convertit une chaîne de caractères en minuscules
toUpperCase()                                           //convertit une chaîne de caractères en majuscules
toString()                                              //renvoie une chaîne de caractères représentant l'objet String en cours
trim()                                                  //supprime les espaces vides au début et à la fin d'une chaîne de caractères
valueOf()                                               //renvoie la valeur primitive d'un objet String
padEnd(targetLength[, padString])                       //ajoute des caractères à la fin d'une chaîne de caractères jusqu'à ce qu'elle atteigne la longueur spécifiée
padStart(targetLength[, padString])                     //ajoute des caractères au début d'une chaîne de caractères jusqu'à ce qu'elle atteigne la longueur spécifiée






//-------------------------------------------------------------------//
//*stuctur des condition if
if (condition) {
    //block trétait si condition est vrai
}

//*stuctur des condition if else
if (condition) {
    //block trétait si condition est vrai
}
else {
    //block trétait si condition est égal a tout autre resulta
}

//*stuctur des condition if else if
if (condition1) {
    //block trétait si condition1 est vrai
}
else if (condition2) {
    //block trétait si condition2 est vrai
}
else{
    //block trétait si condition est égal a tout autre resulta
}

//-------------------------------------------------------------------//
//*stuctur de SWITCH
switch (param) {   // param = a la valeur qui va étre verifier si egale au case
    case value1:
        //block trétait si value1 est égale a param
        break;
    case value2:
        //block trétait si value2 est égale a param
        break;
    default:
        //block trétait si tout autre valeur
        break;
}

//-------------------------------------------------------------------//
//*stuctur de Boucle
//Boucle while = TANQUE //test la condition avent d'entrer dans la boucle
while (condition) {
    
}

//Boucle Do while = FAIRE TANQUE  //Entrer dans la boucle une premier fois puis test la condition a la fin
do {

} while (condition);

//-------------------------------------------------------------------//
//*stuctur de for boucle sur un tableau
for (let i = 0; i < array.length; i++) {
    //block trétait a chaque boucle
}

//-------------------------------------------------------------------//
//*stuctur de forin boucle sur un objet
let valueObject = 0;

for (let e in monObjetConstruct) {
    valueObject += e + monObjetConstruct;
}

//-------------------------------------------------------------------//
//*declaration de function auto-executer
(function(x){
    x = prompt("Entrez un nombre")
    alert("Carré de " + x + " = " + x*x);
})();

//*declaration de function anonyme
let carre = function(x){
    console.log("Carré de " + x + " = " + x*x);
};
let y = prompt("Entrez un nombre");
//Apélle de la function
carre(y);

//*declaration de function
function prod(x,y) {
    return x * y;
}

//*declaration de function Constructeur
function MonConstructeur(param1, param2, param3){
    this.value1 = param1;
    this.value2 = param2;
    this.value3 = param3;
}
//déclaration d'un object avec le constructeur
let monObjetConstruct = new MonConstructeur("aaa","bbb",0);
//accéder a c'est paramétre
monObjetConstruct.value1;

//-------------------------------------------------------------------//
//*déclaration d'un objet literal
let monObjet = {
    premierProp : "",
    deuxiemProp : 0,
    troisiemProp : true,

    //Propriéter de function anonyme relier a l'objet
    maFunctionAn : function(){
        return resultat;
    }
}
//accéder a ma propriéter de ma function anonyme de mon object est léxecute
monObjet.maFunctionAn();

//-------------------------------------------------------------------//
//*Tableaux array
//Déclaration
let monTableau = [value1, value2, value3];

//-------------------------------------------------------------------//
//*Méthode pour les array
monTableau.push(value4, value5);                    //ajoute des élément en fin de tableaux est renvoie la nouvelle taile du tableaux
monTableau.unshift(value4, value5);                 //ajoute des élément en début de tableaux est renvoie la nouvelle taile du tableaux
monTableau.pop();                                   //supprime le dernnier élément du tableaux est le renvoie l'élément supprimer
monTableau.shift();                                 //supprime le premier élément du tableaux est le renvoie l'élément supprimer
monTableau.splice(p,nbE,'value a ajouter');         //supprime le premier élément du tableaux est le renvoie l'élément supprimer
monTableau.sort();                                  //trie dans lordre alphabetique

//-------------------------------------------------------------------//