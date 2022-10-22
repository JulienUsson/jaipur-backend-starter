import express from "express"
import * as gameService from "../services/gameService"
import * as db from "../database"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", (req, res) => {
  // TODO retourner le status 404 si le nom n'existe pas
  if (!req.body.name) return res.status(400).send("Not found");

  const newGame = gameService.createGame(req.body.name);
  db.saveGame(newGame)

  res.status(201).json({ id: newGame.id, name: newGame.name });
})

router.get("/", (req, res) => {
  //TODO retourner la liste des parties existantes

  const gameList = db.getGames().map(elt => ({ id: elt.id, name: elt.name }));
  res.status(200).json(gameList);
})




router.get("/:gameID/players/:playerId", (req, res) => {

  if (!req.params.gameID || !req.params.playerId) return res.status(400).send("Uncorrect arguments");
  if (!(typeof req.body.gameID == typeof int) || !(typeof req.body.playerId == typeof int)) return res.status(404).send("Uncorrect type of arguments");
  const gameList = db.getGames().filter(game => game.id == req.params.gameID);

  let retour = gameList.map(elt => (
    {
      currentPlayerIndex: req.params.playerId,
      name: elt.name,
      id: elt.id,
      market: elt.market,
      tokens: elt.tokens,
      hand: elt._players[req.params.playerId].hand,
      camelsCount: elt._players[req.params.playerId].camelsCount,
      winnerIndex: elt.winnerId,
      bonusTokens: elt._bonusTokens
    }))
  res.status(200).json(retour);
  // if (gameList === {}) return res.status(404).send("Game not found");

})
export default router