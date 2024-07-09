const {add, sub, mul, div}  = require('../src/app')
// const expect = require('chai').expect;



let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();



// 1.BDD - 'describe' and 'it'
describe('Suite 1', () => {
    it('add(2,3) should return 5', () =>{
        expect(add(2,3)).to.be.equal(5);
    })
})

describe('Suite 2', () => {
    it('sub(5,3) should return 2', () =>{
        expect(sub(5,3)).to.be.equal(2);
    })
})

describe('Suite 2', () => {
    it('mul(5,5) should return 25', () =>{
        expect(mul(5,5)).to.be.equal(25);
    })
})

describe('Suite 2', () => {
    it('div(10,5) should return 2', () =>{
        expect(div(10,5)).to.be.equal(2);
    })
})