document.addEventListner('DOMContentLoaded', function() { 
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const recapDiv = document.getElementById('recap);
    const recapName = document.getElementById('recap-name');
console.log(recapName);
    form.addEventListener('submit', funcion(event) {
        evnt.preventDefault();

        if (nameInput.val == "") { 
            alert("Le nom est requis.");
            return;
        }

        recapName.textConten = nameInput.value;
        recapDiv.style.dislay = 'bloc';
    });
});
