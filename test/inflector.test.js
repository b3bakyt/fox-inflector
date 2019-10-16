const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('Record creation', () => {
    it('The function create should return a created record', (done) => {
        expect(Inflector.pluralize('word')).toEqual('words');
        done();

        expect(Inflector.pluralize('deer')).toEqual('deer');
        done();
    });
});
