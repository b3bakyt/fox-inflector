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

    it('The function pluralize should return right Irregular plural', (done) => {
        expect(Inflector.pluralize('atlas')).equal('atlases');
        expect(Inflector.pluralize('brother')).equal('brothers');
        expect(Inflector.pluralize('cookie')).equal('cookies');
        expect(Inflector.pluralize('move')).equal('moves');
        expect(Inflector.pluralize('genie')).equal('genies');
        expect(Inflector.pluralize('loaf')).equal('loaves');
        expect(Inflector.pluralize('mythos')).equal('mythoi');
        expect(Inflector.pluralize('corps')).equal('corps');
        expect(Inflector.pluralize('flounder')).equal('flounder');
        expect(Inflector.pluralize('addendum')).equal('addendums');
        expect(Inflector.pluralize('aircraft')).equal('aircraft');
        expect(Inflector.pluralize('alumna')).equal('alumnae');
        expect(Inflector.pluralize('alumnus')).equal('alumni');
        expect(Inflector.pluralize('analysis')).equal('analyses');
        expect(Inflector.pluralize('antenna')).equal('antennas');
        expect(Inflector.pluralize('antithesis')).equal('antitheses');
        expect(Inflector.pluralize('apex')).equal('apexes');
        expect(Inflector.pluralize('axis')).equal('axes');
        expect(Inflector.pluralize('bacillus')).equal('bacilli');
        expect(Inflector.pluralize('bacterium')).equal('bacteria');
        expect(Inflector.pluralize('basis')).equal('bases');
        expect(Inflector.pluralize('beau')).equal('beaus');
        expect(Inflector.pluralize('bison')).equal('bison');
        expect(Inflector.pluralize('bureau')).equal('bureaus');
        expect(Inflector.pluralize('cactus')).equal('cacti');
        expect(Inflector.pluralize('château')).equal('châteaus');
        expect(Inflector.pluralize('child')).equal('children');
        expect(Inflector.pluralize('codex')).equal('codexes');
        expect(Inflector.pluralize('concerto')).equal('concertos');
        expect(Inflector.pluralize('corpus')).equal('corpuses');
        expect(Inflector.pluralize('crisis')).equal('crises');
        expect(Inflector.pluralize('criterion')).equal('criterions');
        expect(Inflector.pluralize('curriculum')).equal('curriculums');
        expect(Inflector.pluralize('datum')).equal('data');
        expect(Inflector.pluralize('deer')).equal('deer');
        expect(Inflector.pluralize('diagnosis')).equal('diagnoses');
        expect(Inflector.pluralize('die')).equal('dies');
        expect(Inflector.pluralize('dwarf')).equal('dwarves');
        expect(Inflector.pluralize('ellipsis')).equal('ellipses');
        expect(Inflector.pluralize('erratum')).equal('errata');
        expect(Inflector.pluralize('faux pas')).equal('faux pas');
        expect(Inflector.pluralize('fez')).equal('fezes');
        expect(Inflector.pluralize('fish')).equal('fish');
        expect(Inflector.pluralize('focus')).equal('foci');
        expect(Inflector.pluralize('foot')).equal('feet');
        expect(Inflector.pluralize('formula')).equal('formulas');
        expect(Inflector.pluralize('fungus')).equal('fungi');
        expect(Inflector.pluralize('genus')).equal('genera');
        expect(Inflector.pluralize('goose')).equal('geese');
        expect(Inflector.pluralize('graffito')).equal('graffiti');
        expect(Inflector.pluralize('grouse')).equal('grouses');
        expect(Inflector.pluralize('half')).equal('halves');
        expect(Inflector.pluralize('hoof')).equal('hoofs');
        expect(Inflector.pluralize('hypothesis')).equal('hypotheses');
        expect(Inflector.pluralize('index')).equal('indices');
        expect(Inflector.pluralize('larva')).equal('larvas');
        expect(Inflector.pluralize('libretto')).equal('librettos');
        expect(Inflector.pluralize('loaf')).equal('loaves');
        expect(Inflector.pluralize('locus')).equal('loci');
        expect(Inflector.pluralize('louse')).equal('lice');
        expect(Inflector.pluralize('man')).equal('men');
        expect(Inflector.pluralize('matrix')).equal('matrices');
        expect(Inflector.pluralize('medium')).equal('media');
        expect(Inflector.pluralize('memorandum')).equal('memorandums');
        expect(Inflector.pluralize('minutia')).equal('minutiae');
        expect(Inflector.pluralize('moose')).equal('moose');
        expect(Inflector.pluralize('mouse')).equal('mice');
        expect(Inflector.pluralize('nebula')).equal('nebulas');
        expect(Inflector.pluralize('nucleus')).equal('nuclei');
        expect(Inflector.pluralize('oasis')).equal('oases');
        expect(Inflector.pluralize('offspring')).equal('offsprings');
        expect(Inflector.pluralize('opus')).equal('opuses');
        expect(Inflector.pluralize('ovum')).equal('ova');
        expect(Inflector.pluralize('ox')).equal('oxen');
        expect(Inflector.pluralize('parenthesis')).equal('parentheses');
        expect(Inflector.pluralize('phenomenon')).equal('phenomenons');
        expect(Inflector.pluralize('phylum')).equal('phyla');
        expect(Inflector.pluralize('quiz')).equal('quizzes');
        expect(Inflector.pluralize('radius')).equal('radii');
        expect(Inflector.pluralize('referendum')).equal('referendums');
        expect(Inflector.pluralize('salmon')).equal('salmon');
        expect(Inflector.pluralize('scarf')).equal('scarves');
        expect(Inflector.pluralize('self')).equal('selves');
        expect(Inflector.pluralize('series')).equal('series');
        expect(Inflector.pluralize('sheep')).equal('sheep');
        expect(Inflector.pluralize('shrimp')).equal('shrimps');
        expect(Inflector.pluralize('species')).equal('species');
        expect(Inflector.pluralize('stimulus')).equal('stimuli');
        expect(Inflector.pluralize('stratum')).equal('strata');
        expect(Inflector.pluralize('swine')).equal('swine');
        expect(Inflector.pluralize('syllabus')).equal('syllabi');
        expect(Inflector.pluralize('symposium')).equal('symposia');
        expect(Inflector.pluralize('synopsis')).equal('synopses');
        expect(Inflector.pluralize('tableau')).equal('tableaus');
        expect(Inflector.pluralize('thesis')).equal('theses');
        expect(Inflector.pluralize('thief')).equal('thieves');
        expect(Inflector.pluralize('tooth')).equal('teeth');
        expect(Inflector.pluralize('trout')).equal('trout');
        expect(Inflector.pluralize('tuna')).equal('tuna');
        expect(Inflector.pluralize('vertebra')).equal('vertebras');
        expect(Inflector.pluralize('vertex')).equal('vertices');
        expect(Inflector.pluralize('vita')).equal('vitas');
        expect(Inflector.pluralize('vortex')).equal('vortexes');
        expect(Inflector.pluralize('wharf')).equal('wharves');
        expect(Inflector.pluralize('wife')).equal('wives');
        expect(Inflector.pluralize('wolf')).equal('wolves');
        expect(Inflector.pluralize('woman')).equal('women');

        done();
    });

    it('The function pluralize should return plural of a single', (done) => {
        expect(Inflector.pluralize('officialese')).equal('officialese');
        expect(Inflector.pluralize('japanese')).equal('japanese');
        done();
    });
});
