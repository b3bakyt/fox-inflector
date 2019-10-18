const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('camelize tests', () => {
    it('The function camelize should return human-readable string from word', (done) => {
        expect(Inflector.camelize('test_word_id')).equal('TestWordId');
        expect(Inflector.camelize('user_group_states')).equal('UserGroupStates');
        expect(Inflector.camelize('user_group_states123', true)).equal('UserGroupStates123');
        done();
    });
});
