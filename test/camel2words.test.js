const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('camel2words tests', () => {
    it('The function camel2words should convert CamelCase name into space-separated words', (done) => {
        expect(Inflector.camel2words('TestWord')).equal('Test Word');
        expect(Inflector.camel2words('testWord_Hello', false)).equal('test word hello');
        expect(Inflector.camel2words('TestWord-Hello123Hi', false)).equal('test word hello123 hi');
        done();
    });
});
