require('../index');
const Chai = require('chai');
const {
    expect,
    assert,
    should,
} = Chai;

describe('Prototype usage tests', () => {

    it('The function pluralize should return plural with s in the end', (done) => {
        expect('word'.pluralize()).equal('words');
        done();
    });

    it('The function singularize should return singular', (done) => {
        expect('words'.singularize()).equal('word');
        done();
    });

    it('The function titleize should convert CamelCase to english sentence', (done) => {
        expect('testWord_Hello'.titleize()).equal('Test word hello');
        expect('TestWord-Hello123Hi'.titleize( true)).equal('TEST WORD-HELLO123 HI');
        done();
    });

    it('The function camelize should return human-readable string from word', (done) => {
        expect('test_word_id'.camelize()).equal('TestWordId');
        expect('test#&case'.camelize( )).equal('TestCase');
        done();
    });

    it('The function camel2words should convert CamelCase name into space-separated words', (done) => {
        expect('TestWord'.camel2words('TestWord')).equal('Test Word');
        expect('testWord_Hello'.camel2words( false)).equal('test word hello');
        done();
    });

    it('The function camel2id should convert CamelCase name into ID in lowercase', (done) => {
        expect('TestWord'.camel2id()).equal('test-word');
        expect('testWord_Hello'.camel2id( '/')).equal('test/word/hello');
        done();
    });

    it('The function id2camel should convert CamelCase name into ID in lowercase', (done) => {
        expect('test-word'.id2camel()).equal('TestWord');
        expect('test_word_hel-lo'.id2camel('_')).equal('TestWordHel-lo');
        done();
    });

    it('The function underscore should convert CamelCase to underscored words', (done) => {
        expect('TestWord'.underscore()).equal('test_word');
        done();
    });

    it('The function humanize should return human-readable string from word', (done) => {
        expect('test_word_id'.humanize()).equal('Test word');
        expect('user_group_states123'.humanize( true)).equal('USER GROUP STATES123');
        done();
    });

    it('The function variablize should return same as camelize but first char is in lowercase', (done) => {
        expect('user_group_states123'.variablize( )).equal('userGroupStates123');
        done();
    });

    it('The function tableize should convert class name to its table name (pluralized)', (done) => {
        expect('TestWord'.tableize()).equal('test_words');
        done();
    });

    it('string with all spaces converted to given replacement', (done) => {
        expect('test word # *@#id'.slug()).equal('test-word-id');
        expect('USER_GROUP_STATES'.slug( ' ', false)).equal('USER GROUP STATES');
        done();
    });

    it('The function classify should convert table name to its class name', (done) => {
        expect('test_words'.classify()).equal('TestWord');
        expect('language_japanese'.classify()).equal('LanguageJapanese');
        done();
    });

    it('should return ordinal English form number', (done) => {
        expect('1'.ordinalize()).equal('1st');
        expect('2'.ordinalize()).equal('2nd');
        expect('3'.ordinalize()).equal('3rd');
        done();
    });
});
