document.write('Bonjour tout le monde...')

let nombre1 = 10
const Pi = 3.14 
let nom = 'Capi'

console.log(nombre1)
console.log(Pi)

document.write('<br/>' + nombre1)
document.write('<br/>'+ Pi)
document.write('<br/>' + nom + '<br/>')

//LES TABLEAUx
const capital = ["Conakry", "Dakar", "Paris"]
const valeur = [1, 2, 3, 4, 5]

document.write('<br/>' + capital[0])
document.write('<br/>' + capital[1])
document.write('<br/>' + capital[2] + '<br/>')

//LES OBJETS
const personne = {
    nom : 'Drame',
    prenom : 'Moriba',
    age : 18
}
document.write('<br/>' + personne.nom)
document.write('<br/>' + personne.prenom)
document.write('<br/>' + personne.age + '<br/>')

//LES CONDITIONS
if (personne.nom == 'Drame'){
    document.write('<br/>' + "c'est Drame")
}
else if(personne.prenom == 'Moriba'){
    document.write('<br/>' + "c'est Moriba")
}
else{
    document.write('<br/>' + "ce n'est ni Drame ni Moriba")
}

//LES BOUCLES

for(let i = 0; i<10; i++){
    document.write('<br/>'+ i )
}
document.write('<br/>'+ '<br/>')