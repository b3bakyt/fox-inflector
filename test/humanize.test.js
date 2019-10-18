const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('humanize tests', () => {
    it('The function humanize should return human-readable string from word', (done) => {
        expect(Inflector.humanize('test_word_id')).equal('Test word');
        expect(Inflector.humanize('user_group_states')).equal('User group states');
        expect(Inflector.humanize('user_group_states123', true)).equal('USER GROUP STATES123');
        done();
    });
});
