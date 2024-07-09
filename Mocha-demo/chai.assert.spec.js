// const should = require('chai').should();
const axios = require('axios')


let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

let assert;
(async () => {
    const chai = await import('chai');
    assert = chai.assert;
})();

describe('Chai Assertion', () => {
    const a = 20,
    arr = [30,40,50]
    obj = {name: 'Dhanesh', age:30},
    myFunc = (a,b) => a+b,
    isTrue = true,
    nan = NaN,
    myUndefined = undefined;
})

it.only('Assert Style', () => {
    assert.ok(false)

    assert.isOk('everyting','everything is ok');
    assert.typeOf(arr,'array');
    assert.include(arr,30,"30 isn't there in the array");
    assert.LengthOf(arr,3,"Length isn't 3");
    assert.deepEqual(arr,[30,40,50]);
    assert.equal(arr,[30,40,50]);
    assert.sameOrderedMembers(arr,[30,40,50]);
});

it('Expect Style', () => {
    expect(true).to.be.false;
    expect(arr).to.be.a('array');
    expect(arr).to.have.length(3);
    expect(arr).to.eql(30,40,50);
    expect(arr).to.have.keys(["name","age"]);
})

it('Should Style', () => {
    expect(true).to.be.true;
    expect(arr).to.include(30);

})