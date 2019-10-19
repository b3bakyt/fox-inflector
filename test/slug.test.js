const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('slug tests', () => {
    it('string with all spaces converted to given replacement', (done) => {
        expect(Inflector.slug('test word id')).equal('test-word');
        expect(Inflector.slug('user group states', '_')).equal('user_group_states');
        expect(Inflector.slug('USER_GROUP_STATES', ' ', false)).equal('USER GROUP STATES');
        done();
    });
});
