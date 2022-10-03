import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  if(!req.body.name)
    return res.status(400).send("No name");

  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})

export default router
