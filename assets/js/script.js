// ERREUR : "addEventListner" est mal orthographié → 
// document.addEventListner('DOMContentLoaded', function() { 
// L'événement 'DOMContentLoaded' ne s'exécute jamais.
// Démarche : En ouvrant la console du navigateur, j’ai vu qu’aucune instruction ne s’exécutait.
//            J’ai ajouté un console.log au début pour tester, mais rien ne s’affichait.
// CORRECTION : document.addEventListener('DOMContentLoaded', ...)
document.addEventListener('DOMContentLoaded', function() { 

    // CORRECT : le formulaire est bien sélectionné si présent dans le HTML.
    const form = document.querySelector('form');

    // CORRECT : récupère le champ avec l’ID "name".
    const nameInput = document.getElementById('name');

    // ERREUR : guillemet manquant → provoque une erreur de syntaxe (le script plante).
    // const recapDiv = document.getElementById('recap);
    // Démarche : En regardant la console, j’ai vu une erreur "Uncaught SyntaxError: Invalid or unexpected token".
    // CORRECTION : document.getElementById('recap');
    const recapDiv = document.getElementById('recap');

    // CORRECT : ID bien écrit.
    const recapName = document.getElementById('recap-name');

    // Utile pour tester dans la console.
    console.log(recapName);

    // ERREUR : "funcion" mal orthographié → erreur de syntaxe.
    // form.addEventListener('submit', funcion(event) {
    // En plus, le paramètre s'appelle "event" mais plus bas on utilise "evnt" → erreur de référence.
    // Démarche : Le navigateur affichait "Unexpected identifier 'funcion'".
    // CORRECTION : form.addEventListener('submit', function(event) { ... })
    form.addEventListener('submit', function(event) {

        // ERREUR : "evnt" n’existe pas → ReferenceError dans la console.
        // evnt.preventDefault();
        // Démarche : Dans la console, j’ai vu "evnt is not defined".
        // CORRECTION : event.preventDefault();
        event.preventDefault();

        // ERREUR : ".val" n’existe pas en JavaScript pur (c’est du jQuery).
        // if (nameInput.val == "") { 
        //    alert("Le nom est requis.");
        //    return;
        //}
        // Le test ne fonctionne donc jamais.
        // Démarche : J’ai testé "console.log(nameInput.val)" et vu que c’était undefined.
        // CORRECTION : nameInput.value === ""
        if (nameInput.value === "") { 
            alert("Le nom est requis.");
            return;
        }

        // ERREUR : "textConten" mal orthographié → aucune mise à jour visible.
        // recapName.textConten = nameInput.value;
        // Démarche : J’ai affiché "recapName.textConten" dans la console et obtenu undefined.
        // CORRECTION : recapName.textContent = ...
        recapName.textContent = nameInput.value;

        // ERREUR : "dislay" mal orthographié + "bloc" en français → aucune modification de style.
        // recapDiv.style.dislay = 'bloc';
        // Démarche : En inspectant avec l’onglet "Éléments", la propriété CSS n’apparaissait pas.
        // CORRECTION : recapDiv.style.display = 'block';
        recapDiv.style.display = 'block';
    });
});
