import day1 from './index';

describe('On Day 1', () =>{
    it(`part1`, ()=>{
        expect(day1.solveForPartOne('treb7uchet')).toBe('77');
        expect(day1.solveForPartOne('1abc2\r\npqr3stu8vwx\r\na1b2c3d4e5f\r\ntreb7uchet')).toBe('142');
    })

    it(`part2`, ()=>{
        expect(day1.solveForPartTwo('7pqrstsixteen')).toBe('76');
        expect(day1.solveForPartTwo('two1nine\r\neightwothree\r\nabcone2threexyz\r\nxtwone3four\r\n4nineeightseven2\r\nzoneight234\r\n7pqrstsixteen')).toBe('281');
    })
});