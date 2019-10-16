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
        expect(Inflector.pluralize('easy')).equal('easies');
        done();
    });

    it('The function pluralize should return right exception plural', (done) => {
        expect(Inflector.pluralize('atlas')).equal('atlases');
        expect(Inflector.pluralize('brother')).equal('brothers');
        expect(Inflector.pluralize('cookie')).equal('cookies');
        expect(Inflector.pluralize('move')).equal('moves');
        expect(Inflector.pluralize('genie')).equal('genies');
        expect(Inflector.pluralize('loaf')).equal('loaves');
        expect(Inflector.pluralize('mythos')).equal('mythoi');
        expect(Inflector.pluralize('corps')).equal('corps');
        expect(Inflector.pluralize('flounder')).equal('flounder');
        done();
    });
});
