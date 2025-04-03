import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

window.onload = function() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    let currentPronoun = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      let currentAdj = adj[j];

      for (let x = 0; x < noun.length; x++) {
        let currentNoun = noun[x];
        let result = currentPronoun + currentAdj + currentNoun + ".com";
        console.log(result);
      }
      
    }
    
  }
};
