const {suite,test,setup,teardown,suiteSetup,suiteTeardown} = require('mocha')
// import {suite,test,setup,teardown,suiteSetup,suiteteardown} from 'mocha'

suite('TDD hooks', () => {
    suiteSetup(() => {
        console.log('one suitesetup')
    })

    suiteTeardown(() => {
        console.log('one suiteteardown')
    })

    setup(() => {
        console.log('one setup')
    })

    teardown(() => {
        console.log('one teardown')
    })

    test('add(7,3) should return 10', () => {
        console.log('one suitesetup')
    })

})