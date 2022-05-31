//Création des variables pour les autres boutons

let buttons = document.querySelectorAll('button');

for (let element of buttons) {
    element.addEventListener('click', function() { whichButton(this)});
}

//Variable pour récupérer l'affichage

let calcul = document.getElementById('calcul');
let result = document.getElementById('result');

//Fonction pour trouver quel bouton a été appelé

document.addEventListener('keydown', function(e){
    calcul.innerText += e.key;
});





function whichButton(el){
    switch(el.innerText){
        case 'C' : 
            calcul.textContent = "";
            result.textContent = "";
            break;
        case '=':
            result.textContent = '= '+ eval(calcul.innerText);
            break;
        case '⇐' :
            calcul.textContent = calcul.textContent.slice(0,-1);
            break;
        case '|x|':
            result.textContent = '= '+ Math.abs(eval(calcul.innerText));
            break;
        case 'log':
            result.textContent = '= '+ Number.parseFloat(Math.log(eval(calcul.innerText))).toFixed(3);
            break;
        case 'exp' :
            result.textContent = '= '+ Number.parseFloat(Math.exp(eval(calcul.innerText))).toFixed(3);
            break;
        case 'n!':
            let res = 1;
            let j = eval(calcul.innerText);
            for (let i=1 ; i<= j ; i++){
                res *= i;
            }
            result.textContent = '= ' + res;
            break;
        case 'x²' : 
            result.textContent = '= '+ eval(calcul.innerText)*eval(calcul.innerText);
            break;
        case '√x':
            result.textContent = '= '+ Number.parseFloat(Math.sqrt(eval(calcul.innerText))).toFixed(6);
            break;
        case '1/x':
            result.textContent = '= '+ Number.parseFloat(1/(eval(calcul.innerText))).toFixed(6);
            break;
        default :
            calcul.textContent += el.innerText;
            break; 
    }
}

