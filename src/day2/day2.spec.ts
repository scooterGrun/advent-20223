import day2 from './index';

describe('On Day 2', () =>{
    it(`part1`, ()=>{
        expect(day2.solveForPartOne("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\r\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\r\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\r\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\r\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green")).toBe('8');
        expect(day2.solveForPartOne("Game 1: 3 blue, 7 green, 10 red; 4 green, 4 red; 1 green, 7 blue, 5 red; 8 blue, 10 red; 7 blue, 19 red, 1 green")).toBe("0")
    })

    it("part 2", () => {
        expect(day2.solveForPartTwo("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toBe("48")
        expect(day2.solveForPartTwo("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red")).toBe("630")
    })
});