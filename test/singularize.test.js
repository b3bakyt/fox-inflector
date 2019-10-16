const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('singularize tests', () => {
    it('The function singularize should return singular', (done) => {
        expect(Inflector.singularize('words')).equal('word');
        expect(Inflector.singularize('issues')).equal('issue');
        expect(Inflector.singularize('boxes')).equal('box');
        expect(Inflector.singularize('apples')).equal('apple');
        expect(Inflector.singularize('easies')).equal('easy');
        done();
    });

    it('The function singularize should return right Irregular singular', (done) => {
        expect(Inflector.singularize('atlases')).equal('atlas');
        expect(Inflector.singularize('brothers')).equal('brother');
        expect(Inflector.singularize('cookies')).equal('cookie');
        expect(Inflector.singularize('moves')).equal('move');
        expect(Inflector.singularize('symposia')).equal('symposium');
        expect(Inflector.singularize('synopses')).equal('synopsis');
        expect(Inflector.singularize('tableaus')).equal('tableau');
        expect(Inflector.singularize('theses')).equal('thesis');
        expect(Inflector.singularize('thieves')).equal('thief');
        expect(Inflector.singularize('teeth')).equal('tooth');
        expect(Inflector.singularize('trout')).equal('trout');
        expect(Inflector.singularize('tuna')).equal('tuna');
        expect(Inflector.singularize('vertebras')).equal('vertebra');
        expect(Inflector.singularize('vertices')).equal('vertex');
        expect(Inflector.singularize('vitas')).equal('vita');
        expect(Inflector.singularize('vortexes')).equal('vortex');
        expect(Inflector.singularize('wharves')).equal('wharf');
        expect(Inflector.singularize('wives')).equal('wife');
        expect(Inflector.singularize('wolves')).equal('wolf');
        expect(Inflector.singularize('women')).equal('woman');

        done();
    });

    it('The function singularize should return singular of a plural', (done) => {
        expect(Inflector.singularize('officialese')).equal('officialese');
        expect(Inflector.singularize('japanese')).equal('japanese');
        done();
    });
});
