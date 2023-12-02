import { Day } from "../day";

type Game = {
    red :number,
    blue: number,
    green: number
}

class Day2 extends Day {

    constructor(){
        super(2);
    }

    getGameNumber(row: String) {
        return parseInt(row.split(":")[0].replace("Game ",""))
    }

    checkGame(game: Game, max: Game) {
        return game.red > max.red || game.green > max.green || game.blue > max.blue
    }

    getMaxGame(game: Game, currentMax: Game) : Game {
        return {
            red : Math.max(game.red, currentMax.red),
            green : Math.max(game.green, currentMax.green),
            blue : Math.max(game.blue, currentMax.blue),
        }
    }

    createGame(game: string) : Game {
        const initial : Game = { 
            red: 0,
            green: 0,
            blue: 0
        }
        game.split(",").forEach(e => {
            if (e.includes("red")) {
                initial.red = parseInt(e.replace("red","").trim())
            }
            if (e.includes("green")) {
                initial.green = parseInt(e.replace("green","").trim())
            }
            if (e.includes("blue")) {
                initial.blue = parseInt(e.replace("blue","").trim())
            }
        })
        return initial
    }

    solveForPartOne(input: string): string {
        const MAX : Game = { red: 12, blue: 14, green: 13 }
        let sum = 0
        input.split("\r\n").forEach(  row => {
            if (!row.split(":")[1].split(";").some(g => this.checkGame(this.createGame(g), MAX))) {
                sum += this.getGameNumber(row)
            }
        })
        
        return sum.toString();
    }

    solveForPartTwo(input: string): string {
        let sum = 0
        input.split("\r\n").forEach(  row => {
            const maxGame = row.split(":")[1]
            .split(";")
            .map(gStr => this.createGame(gStr))
            .reduce((accumulator, currentGame) => {
                return this.getMaxGame(currentGame, accumulator)
            }, { red: 0, green: 0, blue: 0})
            sum += maxGame.red * maxGame.blue * maxGame.green
        })
        return sum.toString();
    }
}

export default new Day2;