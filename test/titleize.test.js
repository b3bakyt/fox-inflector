const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('titleize tests', () => {
    it('The function titleize should convert CamelCase to english sentence', (done) => {
        expect(Inflector.titleize('TestWord')).equal('test word');
        expect(Inflector.titleize('testWord_Hello')).equal('test word hello');
        expect(Inflector.titleize('TestWord-Hello123Hi')).equal('test word hello123 hi');
        done();
    });
});
