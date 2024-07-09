// const expect = require('chai').expect
const axios = require('axios')


let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();


describe.skip('Test Suite 1', function() {

    it('promised based way', function() {
        // this.timeout(20);
        return axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            expect(res.data.data[1].email).to.equal('lindsay.ferguson@reqres.in')
        })
        .catch(err => {
            console.error('error during test:', err);
            throw err;
        })
    })
})
