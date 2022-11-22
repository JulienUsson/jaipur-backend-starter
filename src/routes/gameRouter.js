import express from "express"
import * as gameService from "../services/gameService"
import * as database from "../database/index.js"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  // TODO retourner le status 400 si le nom n'existe pas.
  if (!req.body.name) {
    return res.status(400).send("Le nom n'existe pas.")
  }
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})

router.get("/", function (req, res) {
  const games = database.getGames()

  const croppedGames = games.map(game => { return {id: game.id, name : game.name}})
  res.status(200).json(croppedGames)
})

router.get("/:gameId/players/:playerId", function(req, res) {
  const games = database.getGames()
  const playerId = parseInt(req.params.playerId)

  const foundGame = games.find(game => game.id.toString() === req.params.gameId)
  if(!foundGame)
  {
    return res.status(404).send("La partie n'existe pas" + req.params.gameId)
  }
  const goodgamegoodplayer = {
    currentPlayerIndex : foundGame.currentPlayerIndex,
    name : foundGame.name,
    id : foundGame.id,
    market : foundGame.market,
    tokens : foundGame.tokens,
    hand : foundGame._players[playerId].hand,
    camelsCount : foundGame._players[playerId].camelsCount,
    winnerIndex : foundGame.winnerId,
    bonusTokens : foundGame._bonusTokens,
  }
  res.status(200).json(goodgamegoodplayer)
})

export default router