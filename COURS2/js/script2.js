// Les fonctions 

function dir_bonjour(){
    document.write("Bonjour les gars" + "<br/>")
}

dir_bonjour()

function somme(a, b){
    document.write(a + b + "<br/>")
}
somme(10, 20)

function puissance(a, n){
    return a**n 
}

document.write(puissance(5, 2)+ "<br/>")

document.write("Script 2")

const personne2 = {
    nom : 'Drame',
    prenom : 'Aly',
    age : 85
}
document.write('<br/>'+ 'Age : ' + personne2.age + '<br/>')

//LES CLASSES
class Personne{
    constructor(nom, prenom, age){
        this.nom = nom,
        this.prenom = prenom,
        this.age = age
    }
    afficherNom(){
        return this.nom
    }
    afficherPrenom(){
        return this.prenom
    }
    afficherAge(){
        return this.age
    }
}
const p1 = new Personne("Dramé", "Moriba", 23)
const p2 = new Personne("Diawara", "Fatoumata", 20)
const p3 = new Personne("Diallo", "Asmaou", 21)

document.write("Nom : " + p1.afficherNom()+ " Prenom : " + p1.afficherPrenom() + " Age : " + p1.afficherAge()+" ans" + "<br/>")
document.write("Nom : " + p2.afficherNom()+ " Prenom : " + p2.afficherPrenom() + " Age : " + p2.afficherAge() +" ans" + "<br/>")

document.write("<br/>")
class Universite{
    constructor(nom, quartier, statut){
        this.nom = nom,
        this.quartier = quartier,
        this.statut = statut
    }
    afficherNom(){
        return this.nom
    }
    afficherQuartier(){
        return this.quartier
    }
    afficherStatut(){
        return this.statut
    }
}
const u1 = new Universite("Ukag", "Nongo", "Privée")
const u2 = new Universite("UGANC", "Dixinn", "Public")
const u3 = new Universite("UNC", "Nongo", "Privée")

document.write("Nom : "+ u1.afficherNom() + " Quartier : "+ u1.afficherQuartier() + " Statut : "+ u1.afficherStatut() +"<br/>")
document.write("Nom : "+ u2.afficherNom() + " Quartier : "+ u2.afficherQuartier() + " Statut : "+ u2.afficherStatut() +"<br/>")
document.write("Nom : "+ u3.afficherNom() + " Quartier : "+ u3.afficherQuartier() + " Statut : "+ u3.afficherStatut() +"<br/>")