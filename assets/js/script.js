window.addEventListener("DOMContentLoaded", () => {
    // 🟢 Correction : booléen au lieu de chaîne
    let is_run = true;

    init();
    

    function init() {
        const button = document.querySelector('.button');

        // 🟢 Correction : "click" au lieu de "clic", et code plus lisible
        button.addEventListener('click', () => {
            is_run = !is_run;

            // 🟢 Simplification : on ajoute ou retire la classe "pause" avec classList
            button.classList.toggle('pause', is_run);
        });

        // 🟢 Correction : "setInterval" + syntaxe correcte
        setInterval(() => {
            if (is_run) {
                const now = new Date();

                // 🟢 Correction : adjustTimer renvoie maintenant la valeur formatée
                document.querySelector('#hours').textContent   = adjustTimer(now.getHours());
                document.querySelector('#minutes').textContent = adjustTimer(now.getMinutes());
                document.querySelector('#seconds').textContent = adjustTimer(now.getSeconds());

                // 🟢 Correction : randomHexColor utilise 3 paramètres correctement définis
                const h = now.getHours();
                const m = now.getMinutes();
                const s = now.getSeconds();
                document.body.style.background = randomHexColor(h, m, s);
            }
        }, 1000);
    }

    // 🟢 Correction : ajout du return
    function adjustTimer(timer) {
        return timer < 10 ? '0' + timer : timer;
    }

    // 🟢 Correction : ajout du 3e paramètre et calcul correct de la couleur
    function randomHexColor(x, y, z) {
        const r = Math.floor((x / 24) * 255);
        const g = Math.floor((y / 60) * 255);
        const b = Math.floor((z / 60) * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
});