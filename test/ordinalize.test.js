const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('ordinalize tests', () => {
    it('should return ordinal English form number', (done) => {
        expect(Inflector.ordinalize(1)).equal('1st');
        expect(Inflector.ordinalize(2)).equal('2nd');
        expect(Inflector.ordinalize(3)).equal('3rd');
        expect(Inflector.ordinalize(13)).equal('13th');
        done();
    });
});
