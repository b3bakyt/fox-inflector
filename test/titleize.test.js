const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('titleize tests', () => {
    it('The function titleize should convert CamelCase to english sentence', (done) => {
        expect(Inflector.titleize('TestWord')).equal('Test word');
        expect(Inflector.titleize('testWord_Hello')).equal('Test word  hello');
        expect(Inflector.titleize('TestWord-Hello123Hi', true)).equal('TEST WORD-HELLO123 HI');
        done();
    });
});
