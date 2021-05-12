// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console
// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 
// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName

let exo1 = document.querySelector('div#content');
console.log((exo1));

let exo2 = document.querySelectorAll('#content');
console.log(exo2);

let exo3 = document.querySelector('li.important');
console.log(exo3);

let exo4 = document.querySelectorAll('.important');
console.log(exo4);

let exo5 = document.querySelectorAll('li');
exo5.forEach(element => {
    console.log(element);
});


//exo1
let exo1 = document.querySelector('div#content');
console.log(exo1);

//exo2
let exo2 = document.querySelectorAll('#content');
console.log(exo2);

//exo3
let exo3 = document.querySelector('li.important');
console.log(exo3);

//exo4
let exo4 = document.querySelectorAll('#important');
console.log(exo4);

//exo5
let exo5 = document.querySelectorAll('.important');
exo5.forEach(element => {
    console.log(element.innerText.substr(0,-1) + element.innerText.substr(-1).toUpperCase());
})
console.log(exo5);

//exo6
let exo6 = document.getElementById('content').getElementsByClassName('grandParagraphe')[0];
console.log(exo6);
