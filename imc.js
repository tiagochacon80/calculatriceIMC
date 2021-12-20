
const calculer = document.getElementById('calculer');


function imc() {
    const femme = document.getElementById('femme');
    const homme = document.getElementById('homme');
    const nom = document.getElementById('nom').value;
    const taille = document.getElementById('taille').value;
    const poids = document.getElementById('poids').value; 
    const result = document.getElementById('result');

    if (nom !== '' && taille !== '' && poids !== '') {
        
        const resultatImc = (poids / (taille * taille)).toFixed(2);
        result.textContent = resultatImc;
        
    }else {
        result.textContent = 'Veuillez remplir tous les espaces vides!!!';
    }
}

calculer.addEventListener('click', imc);

