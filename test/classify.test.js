const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('classify tests', () => {
    it('The function classify should convert table name to its class name', (done) => {
        expect(Inflector.classify('test_words')).equal('TestWord');
        expect(Inflector.classify('my_issues')).equal('MyIssue');
        // expect(Inflector.classify('info_people')).equal('InfoPerson');
        expect(Inflector.classify('infos')).equal('Info');
        expect(Inflector.classify('people')).equal('Person');
        expect(Inflector.classify('children')).equal('Child');
        expect(Inflector.classify('movies')).equal('Movie');
        expect(Inflector.classify('series')).equal('Series');
        expect(Inflector.classify('smenu')).equal('Smenu');
        expect(Inflector.classify('Parentheses')).equal('Parenthesis');
        expect(Inflector.classify('easy_utils')).equal('EasyUtil');
        expect(Inflector.classify('best_officialese')).equal('BestOfficialese');
        expect(Inflector.classify('language_japanese')).equal('LanguageJapanese');
        done();
    });
});
