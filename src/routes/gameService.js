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
  for(let i=0; i<count; i++)
  {
    main.push(tableau.shift());
  }

  return main;
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
  game._players.forEach((player) => {
      let camelIndex=player.hand.findIndex((card) => card === "camel")
      while (camelIndex !== -1) {
          player.hand.splice(camelIndex, 1)
          player.camelsCount++
          camelIndex = player.hand.findIndex((card) => card === "camel")
      }
  })
}

// Créer un objet game.
export function createGame(name) {
  const deck = initDeck()
  const market = ["camel", "camel", "camel", ...drawCards(deck, 2)]
  const game = {
    id: db.getGames().length + 1,
    name,
    market,
    _deck: deck,
    _players: [
      { hand: drawCards(deck, 5), camelsCount: 0, score: 0 },
      { hand: drawCards(deck, 5), camelsCount: 0, score: 0 },
    ],
    currentPlayerIndex: 0,
    tokens: {
      diamonds: [7, 7, 5, 5, 5],
      gold: [6, 6, 5, 5, 5],
      silver: [5, 5, 5, 5, 5],
      cloth: [5, 3, 3, 2, 2, 1, 1],
      spice: [5, 3, 3, 2, 2, 1, 1],
      leather: [4, 3, 2, 1, 1, 1, 1, 1, 1],
    },
    _bonusTokens: {
      3: shuffle([2, 1, 2, 3, 1, 2, 3]),
      4: shuffle([4, 6, 6, 4, 5, 5]),
      5: shuffle([8, 10, 9, 8, 10]),
    },
     winnerId: undefined,
  }
  putCamelsFromHandToHerd(game)
  db.saveGame(game)

  return {}
}
