import * as gameService from "./gameService"

describe("Game service", () => {
  test("should init a deck", () => {
    const deck = gameService.initDeck()

    expect(deck.filter((nom) => nom === "diamonds").length).toBe(6)
    expect(deck.filter((nom) => nom === "gold").length).toBe(6)
    expect(deck.filter((nom) => nom === "silver").length).toBe(6)
    expect(deck.filter((nom) => nom === "cloth").length).toBe(8)
    expect(deck.filter((nom) => nom === "spice").length).toBe(8)
    expect(deck.filter((nom) => nom === "leather").length).toBe(10)
    expect(deck.filter((nom) => nom === "camel").length).toBe(8)
  })

  test("should draw cards", () => {
    const deck = ["diamonds", "gold", "gold", "camel", "cloth"]
    const drawedCard = gameService.drawCards(deck)

    expect(deck.length).toBe(4)
    expect(drawedCard).toStrictEqual(["diamonds"])
  })

  test("should put camels from hand to herd", () => {
    const jeu = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
        { hand: ["silver", "gold", "camel"], camelsCount: 0 },
        { hand: ["camel", "camel"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(jeu)
    expect(jeu._players[0].hand.length).toBe(1)
    expect(jeu._players[0].hand).toStrictEqual(["gold"])
    expect(jeu._players[0].camelsCount).toEqual(1)

    expect(jeu._players[1].hand.length).toBe(2)
    expect(jeu._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(jeu._players[1].camelsCount).toEqual(0)

    expect(jeu._players[2].hand.length).toBe(2)
    expect(jeu._players[2].hand).toStrictEqual(["silver", "gold"])
    expect(jeu._players[2].camelsCount).toEqual(1)

    expect(jeu._players[3].hand.length).toBe(0)
    expect(jeu._players[3].hand).toStrictEqual([])
    expect(jeu._players[3].camelsCount).toEqual(2)
  })
})
