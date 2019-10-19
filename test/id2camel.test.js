const Inflector = require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;


describe('id2camel tests', () => {
    it('The function id2camel should convert CamelCase name into ID in lowercase', (done) => {
        expect(Inflector.id2camel('test-word')).equal('TestWord');
        expect(Inflector.id2camel('test_word_hel-lo', '_')).equal('TestWordHel-lo');
        expect(Inflector.id2camel('test-word-hello123-hi')).equal('TestWordHello123Hi');
        done();
    });
});
