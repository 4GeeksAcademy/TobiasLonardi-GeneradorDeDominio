import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

window.onload = function() {
  //write your code here
  let randomPronoun = Math.floor(Math.random()*pronoun.length);
  let randomAdj = Math.floor(Math.random()*adj.length);
  let randomNoun = Math.floor(Math.random()*noun.length);
  let result = pronoun[randomPronoun] + adj[randomAdj] + noun[randomNoun] + ".com";
  alert(result);
  console.log(result);
};
