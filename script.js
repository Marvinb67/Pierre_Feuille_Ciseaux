const base = document.querySelector("#base")
const mains = document.querySelectorAll(".mains")
const scoreJ = document.querySelector('#joueurScore')
const scoreC = document.querySelector('#ordiScore')
const scoreD = document.querySelector('#drawScore')
const showOrdi = document.querySelector('#ordi')
const restart = document.querySelector("#restart")

function shuffle(table){
    let rand = table
    let i = table.length, k
    while (--i > 0) {
        k = Math.floor(Math.random() * (i + 1))
        return temp = rand[k]
    }
}

let scoreJoueur = 0
let scoreOrdi = 0
let scoreDraw = 0

scoreJ.innerHTML = "<p>Joueur score : </p>"
scoreC.innerHTML = "<p>Ordi score :</p>"
scoreD.innerHTML = "<p>Egalité  :</p>"
base.innerHTML = "<p>Joueur :  </p> <p>VS</p> <p>  Ordi  : </p>"

function comparer(j, o){
    
    const options = {
    "Pierre": {"Pierre" : "Egalité", "Feuille" : "Perdu", "Ciseaux" : "Victoire"},
    
    "Feuille" : {"Pierre" : "Victoire", "Feuille" : "Egalité", "Ciseaux" : "Perdu"},
    
    "Ciseaux" : {"Pierre" : "Perdu", "Feuille" : "Victoire", "Ciseaux" : "Egalité"}
    
    }
    
    switch (options[j][o]) {
        case "Victoire":
            result = "Victoire Joueur " 
            base.innerHTML = "<p>Joueur : " + joueur + ' </p> <p>VS</p> <p> ' + " Ordi : " + ordi + " </p><p id=\"green\"> " + result + "</p>"
            scoreJoueur++
            scoreJ.innerHTML = "<p>Joueur score :" + scoreJoueur + "</p>"
        break;
        
        case "Perdu":
            result = "Defaite Joueur"
            base.innerHTML = "<p>Joueur : " + joueur + ' </p> <p>VS</p> <p> ' + " Ordi  : " + ordi + " </p><p id=\"red\"> " + result + "</p>"
            scoreOrdi++
            scoreC.innerHTML = "<p>Ordi score :" + scoreOrdi + "</p>"
            break;
        case "Egalité" :
            result = " Egalité " 
            base.innerHTML = "<p>Joueur : " + joueur + ' </p> <p>VS</p> <p> ' + " Ordi : " + ordi + " </p><p id=\"black\"> " + result + "</p>"
            scoreDraw++
            scoreD.innerHTML = "<p>Egalité  :" + scoreDraw + "</p>"
    }
}
        
optionsOrdi = ['Pierre', 'Feuille', 'Ciseaux']
     
mains.forEach(function(main){
            
    main.addEventListener("click", function(){
                
        joueur = main.dataset.choice
        ordi = shuffle(optionsOrdi)
        console.log(ordi)
        comparer(joueur, ordi)
    })
})
    
restart.addEventListener("click", function(){
    location.reload()
})

                          // Méthode longue

// if(j === 'Pierre' && o === "Ciseaux" || j === "Feuille" && o === "Pierre" || j === "Ciseaux" && o === "Feuille"){
//     result = " Victoire Joueur " + joueur
//     base.innerHTML = "<p>" + "Joueur : " + joueur + ' VS ' + " ordi " + ordi + " : " + result + "</p>"
//     scoreJoueur++
//     scoreJ.innerHTML = "Joueur socre :" + scoreJoueur
// }else if(j === "Pierre" && o === "Feuille" || j === "Feuille" && o === "Ciseaux" || j === "Ciseaux" && o === "Pierre"){
//     result = "Defaite Joueur"
//     base.innerHTML = "<p>" + "Joueur : " + joueur + ' VS ' + " ordi " + ordi + " : " + result + "</p>"
//     scoreOrdi++
//     scoreC.innerHTML = "<p>" + "Ordi score :" + scoreOrdi + "</p>"
// }else
//     result = " Egalité " 
//     base.innerHTML = "<p>" + "Joueur : " + joueur + ' VS ' + " ordi " + ordi + " : " + result + "</p>"






// pierre.addEventListener("click", function(){
//     joueur = 'Pierre'
//     choix = Math.floor(Math.random()*3)
//     ordi = optionsOrdi[choix]

//     comparer(joueur, ordi)
// })

// feuille.addEventListener("click", function(){
//     joueur = 'Feuille'
//     choix = Math.floor(Math.random()*3)
//     ordi = optionsOrdi[choix]

//     comparer(joueur, ordi)
// })

// ciseaux.addEventListener("click", function(){
//     joueur = 'Ciseaux'
//     choix = Math.floor(Math.random()*3)
//     ordi = optionsOrdi[choix]

//     comparer(joueur, ordi)
// })