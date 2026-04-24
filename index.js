// Sélectionne le conteneur HTML où le texte s'affichera
const containerEl = document.querySelector(".container");

// Liste des prénoms à afficher en animation
const name = ["Luciana", "Doxi", "Hyacinthe", "Maitso"];

// nameIndex = index du prénom en cours (0 = premier)
// characterIndex = nombre de lettres déjà affichées du prénom
let nameIndex = 0;
let characterIndex = 0;

// Lance l'animation
updateText();

// Fonction qui s'exécute toutes les 400ms
function updateText() {
    // 1. Ajoute une lettre au prénom actuel
    characterIndex++;
    
    // 2. Affiche le prénom coupé (slice) jusqu'à 'characterIndex' lettres
    // Ex: "Luciana".slice(0, 4) = "Luci"
    containerEl.innerHTML = `
    <h1>I am ${name[nameIndex].slice(0, characterIndex)}</h1>
    `;
    
    // 3. Si le prénom actuel est complet (toutes les lettres affichées)
    if (characterIndex === name[nameIndex].length) {
        nameIndex++;        // Passe au prénom suivant
        characterIndex = 0; // Réinitialise le compteur de lettres
    }
    
    // 4. Si on a dépassé le dernier prénom (fin du tableau)
    if (nameIndex === name.length) {
        nameIndex = 0;      // Revient au premier prénom (boucle infinie)
    }
    
    // 5. Rappelle cette fonction après 400 millisecondes (0.4 secondes)
    setTimeout(updateText, 400);
}