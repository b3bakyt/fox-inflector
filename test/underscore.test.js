const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('underscore tests', () => {
    it('The function underscore should convert CamelCase to underscored words', (done) => {
        expect(Inflector.underscore('TestWord')).equal('test_word');
        expect(Inflector.underscore('testWord_Hello')).equal('test_word_hello');
        expect(Inflector.underscore('TestWord-Hello123Hi')).equal('test_word-hello123_hi');
        done();
    });
});
