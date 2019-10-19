const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('camel2id tests', () => {
    it('The function camel2id should convert CamelCase name into ID in lowercase', (done) => {
        expect(Inflector.camel2id('TestWord')).equal('test-word');
        expect(Inflector.camel2id('testWord_Hello', '/')).equal('test/word/hello');
        expect(Inflector.camel2id('TestWord-Hello123Hi')).equal('test-word-hello123-hi');
        done();
    });
});
