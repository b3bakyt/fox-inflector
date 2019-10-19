const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('variablize tests', () => {
    it('The function variablize should return same as camelize but first char is in lowercase', (done) => {
        expect(Inflector.variablize('test_word_id')).equal('testWordId');
        expect(Inflector.variablize('user_group_states')).equal('userGroupStates');
        expect(Inflector.variablize('user_group_states123', true)).equal('userGroupStates123');
        done();
    });
});
