import * as gameService from "./gameService"

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    const game = {
        _players: [
            {hand: ["camel", "gold"], camelsCount: 0},
            {hand: ["gold", "gold"], camelsCount: 0},
        ],
    }

    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toBe(1)

    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(game._players[1].camelsCount).toBe(0)
  })


  test("should draw cards", () => {
    let deck=["Gold", "Gold", "Gold"]
    let drawncard=gameService.drawCards(deck, 1)
    expect(drawncard).toEqual(["Gold"])
    expect(deck).toEqual(["Gold", "Gold"])

  })

  test("should init a deck", () => {
    let deck=gameService.initDeck();
    expect(deck.length).toBe(52) // 55 cartes - 3 chameaux

    let nbDia=0, nbGold=0, nbLeath=0, nbCamel=0, nbSil=0, nbSpi=0, nbClo=0
    for(let i=0; i<deck.length; i++) {
      if(deck[i]=="Diamond")
        nbDia++;
      if(deck[i]=="Gold")
        nbGold++;
      if(deck[i]=="Silver")
        nbSil++;
      if(deck[i]=="Cloth")
        nbClo++;
      if(deck[i]=="Leather")
        nbLeath++;
      if(deck[i]=="Camel")
        nbCamel++;
      if(deck[i]=="Spice")
        nbSpi++;
    }

    expect(nbDia).toBe(6) 
    expect(nbGold).toBe(6) 
    expect(nbSil).toBe(6) 
    expect(nbCamel).toBe(8) 
    expect(nbClo).toBe(8) 
    expect(nbSpi).toBe(8) 
    expect(nbLeath).toBe(10) 

    //Plus simple avec un filter, mais ca marche bien comme ca
    // expect(deck.filter(card => card === "Diamond").length).toBe(6)
  })

})
