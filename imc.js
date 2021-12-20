
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

        let classification = "";

        if(resultatImc < 18.5) {
            classification = "poids insuffisant";
        }   if(resultatImc >= 18.5 && resultatImc <= 24.9){
                classification = "poids normal";
            }   if(resultatImc > 24.9 && resultatImc <= 29.9){
                    classification = "excès de poids"
                } if(resultatImc > 29.9 && resultatImc <= 34.9){
                        classification = "obésité, classe I";
                    }  if(resultatImc > 34.9 && resultatImc <= 39.9){
                            classification = "obésité, classe II";
                        } if(resultatImc > 39.9){
                                classification = "obésité, classe III";
                            }    

       result.textContent = `${nom} votre ICM est ${resultatImc} et vous êtes ${classification}`;
       
        
    }else {
        result.textContent = "Veuillez remplir tous les espaces vides!!!";
    }
}

calculer.addEventListener('click', imc);

