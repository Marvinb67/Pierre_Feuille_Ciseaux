const base = document.querySelector("#base")
const pierre = document.querySelector('#pierre')
const feuille = document.querySelector('#feuille')
const ciseaux = document.querySelector('#ciseaux')
const scoreJ = document.querySelector('#joueurScore')
const scoreC = document.querySelector('#ordiScore')

let scoreJoueur = 0
let scoreOrdi = 0

function comparer(j, o){
    if(j === 'Pierre' && o === "Ciseaux" || j === "Feuille" && o === "Pierre" || j === "Ciseaux" && o === "Feuille"){
        result = " Victoire Joueur " + joueur
        base.innerHTML = "<p>" + "Joueur : " + joueur + ' VS ' + " ordi " + ordi + " : " + result + "</p>"
        scoreJoueur++
        scoreJ.innerHTML = "Joueur socre :" + scoreJoueur
    }else if(j === "Pierre" && o === "Feuille" || j === "Feuille" && o === "Ciseaux" || j === "Ciseaux" && o === "Pierre"){
        result = "Defaite Joueur"
        base.innerHTML = "<p>" + "Joueur : " + joueur + ' VS ' + " ordi " + ordi + " : " + result + "</p>"
        scoreOrdi++
        scoreC.innerHTML = "<p>" + "Ordi score :" + scoreOrdi + "</p>"
    }else
        result = " Egalité " 
        base.innerHTML = "<p>" + "Joueur : " + joueur + ' VS ' + " ordi " + ordi + " : " + result + "</p>"
    }
    
    
optionsOrdi = ['Pierre', 'Feuille', 'Ciseaux']

pierre.addEventListener("click", function(){
    joueur = 'Pierre'
    choix = Math.floor(Math.random()*3)
    ordi = optionsOrdi[choix]

    comparer(joueur, ordi)
})

feuille.addEventListener("click", function(){
    joueur = 'Feuille'
    choix = Math.floor(Math.random()*3)
    ordi = optionsOrdi[choix]

    comparer(joueur, ordi)
})

ciseaux.addEventListener("click", function(){
    joueur = 'Ciseaux'
    choix = Math.floor(Math.random()*3)
    ordi = optionsOrdi[choix]

    comparer(joueur, ordi)
})

