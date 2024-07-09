const {circleArea}  = require('../src/app1')
// const expect = require('chai').expect;



let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();



// 1.BDD - 'describe' and 'it'
describe('Suite 1', () => {
    it('circleArea(5) should return 78.5', () =>{
        expect(circleArea(5)).to.be.equal(78.5);
    })
})

// 2.BDD - 'context' and 'specify'
context('Suite 2', () => {
    specify('circleArea(6) should return 113.03999999999999', () =>{
        expect(circleArea(6)).to.be.equal(113.03999999999999);
    })
})




// 3.TDD - 'suite' and 'test'
const{suite,test} = require('mocha')
suite('Suite 3', () => {
    test('circleArea(7) should return 153.86', () =>{
        expect(circleArea(7)).to.be.equal(153.86);
    })
})

