"use strict"
const tableau  = require('./tableaux')

let longTabNom = tableau.tabNom.length
let longTabPrenom = tableau.tabPrenom.length

console.log('longTabNom= ' + longTabNom)
console.log('longTabPrenom= ' + longTabPrenom)

const peupler_json = () => {

  let position 
  let tabPersonne = []
  let tabToutesLesPersonnes = []
  for (let k=0 ; k<10; k++) 
  {
  		tabPersonne = []
		position = Math.floor(Math.random()*longTabNom);
		tabPersonne.push(tableau.tabNom[position])

		position = Math.floor(Math.random()*longTabPrenom);
		tabPersonne.push(tableau.tabPrenom[position])








		tabToutesLesPersonnes.push(tabPersonne);
  }
  return(tabToutesLesPersonnes)
}


module.exports = peupler_json
