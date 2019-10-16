const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('pluralize tests', () => {
    it('The function pluralize should return plural with s in the end', (done) => {
        expect(Inflector.pluralize('word')).equal('words');
        expect(Inflector.pluralize('issue')).equal('issues');
        expect(Inflector.pluralize('box')).equal('boxes');
        expect(Inflector.pluralize('apple')).equal('apples');
        done();
    });
});
