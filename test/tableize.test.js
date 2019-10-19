const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('tableize tests', () => {
    it('The function tableize should convert class name to its table name (pluralized)', (done) => {
        expect(Inflector.tableize('TestWord')).equal('test_words');
        expect(Inflector.tableize('MyIssue')).equal('my_issues');
        expect(Inflector.tableize('InfoPerson')).equal('info_people');
        expect(Inflector.tableize('EasyUtil')).equal('easy_utils');
        expect(Inflector.tableize('BestOfficialese')).equal('best_officialese');
        expect(Inflector.tableize('LanguageJapanese')).equal('language_japanese');
        done();
    });
});
