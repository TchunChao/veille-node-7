"use strict"
const tableau  = require('./tableaux')

let longTabNom = tableau.tabNom.length
let longTabPrenom = tableau.tabPrenom.length

console.log('longTabNom= ' + longTabNom)
console.log('longTabPrenom= ' + longTabPrenom)

const peupler_json = () => {

  let position 
  let tabVille = []
  for (let k=0 ; k<10; k++)
	{
		position = Math.floor(Math.random()*max)
		tabVille.push(tableau[position])
	}
  return(tabVille)
}


const peupler_bd = (req,res,next) => {
 res.resultat = peupler() 
 console.log('début boucle') 
 for (let elm of res.resultat)
 {
 db.collection('adresse').save(elm, (err, result) => {
 if (err) return console.log(err)
 //console.log('sauvegarder dans la BD') 
 })
 }
 console.log('fin boucle') 
 next()
}

module.exports = peupler_json