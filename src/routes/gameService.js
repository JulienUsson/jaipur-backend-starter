import * as db from "../database"
import { shuffle } from "lodash"

// Créer et retourne un deck mélangé avec 3 chameaux en moins.
export function initDeck() {
  const tableau = [];
  let i;
  for(i=0; i<6; i++)
    tableau.push('Diamond');
  for(i=0; i<6; i++)
      tableau.push('Gold');
  for(i=0; i<6; i++)
    tableau.push('Silver');
  for(i=0; i<8; i++)
    tableau.push('Cloth');.
  for(i=0; i<8; i++)
    tableau.push('Spice');
  for(i=0; i<10; i++)
    tableau.push('Leather');
  for(i=0; i<11-3; i++) // Car 3 chameaux en moins
    tableau.push('Camel');

  // Fonction de shuffle
  /*
  let curId = tableau.length;
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    let tmp = tableau[curId];
    tableau[curId] = tableau[randId];
    tableau[randId] = tmp;
  }*/
  shuffle(deck);

  return tableau;
}

// Pioche x cartes d'un deck.
export function drawCards(deck, count = 1) {
  const main = [];
  let i;
  for(i=0; i<count; i++)
  {
    main.push(tableau.shift()); //Shift c'est le début du deck, Pop la fin 
  }

  return main;
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
  let i;
  let j;
  for(i=0; i<2; i++)
  {
    if( _players[i].camelscount != 0)
    {
      //les deplacer
    }
  }
  // TODO
  // Pour chaque joueur:
  //  Pour chaque chameau dans la main du joueur
  //  Enlever le chameau de la main et le mettre dans l'enclos
}

// Créer un objet game.
export function createGame(name) {
  // TODO
  // Initialiser un nouveau deck avec la fonction précédente
  // Créer le marché avec 3 chameaux et 2 cartes piochés du deck
  // Générer un nouvel identifiant pour la partie
  // Pour chaque joueur:
  //  Créer la main en piochant 5 cartes du deck
  //  Initialiser l'enclos à 0
  //  Initialiser le score à 0
  // Créer les objets contenant les jetons
  // Rassembler le tout pour créer la partie
  // Mettre les chameaux des mains des joueurs dans leurs enclos avec la fonction précédente
  // Retourner la partie 
  return {}
} 
