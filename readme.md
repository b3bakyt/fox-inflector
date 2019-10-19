# Inflector 
is a small library that can perform string manipulations with regard to uppercase/lowercase and singular/plural forms of words.

### Installation

```
npm install fox-inflector
```

### Usage

#### pluralize
Returns the plural of the word
```
pluralize('ox');       // oxen
pluralize('apple');    // apples
```
#### singularize
Returns the singular of the word
```
singularize('oxen');    // ox
singularize('apples');  // apple
```
#### titleize
Converts an underscored or CamelCase word into a English sentence.
```
titleize('TestWord');   // Test word
```
#### camelize
Returns given word as CamelCased
Converts a word like "send_email" to "SendEmail". 
It will remove non alphanumeric character from the word, so "test#&case" will be converted to "TestCase"
```
camelize('test_word');  // TestWord
```
#### camel2words
Converts a CamelCase name into space-separated words.
For example, 'PostTag' will be converted to 'Post Tag'.
```
camel2words('TestWord'); // Test Word
camel2words('testWord_Hello', false); // test word hello
```
#### camel2id
Converts a CamelCase name into an ID in lowercase.
Words in the ID may be concatenated using the specified character (defaults to '-').
For example, 'PostTag' will be converted to 'post-tag'.
```
camel2id('TestWord');   // test-word
camel2id('testWord_Hello', '/');   // test/word/hello
```
#### id2camel
Converts an ID into a CamelCase name.
Words in the ID separated by `separator` (defaults to '-') will be concatenated into a CamelCase name.
For example, 'post-tag' is converted to 'PostTag'.
```
id2camel('test-word');  // TestWord
id2camel('test-word-hello123-hi', '-');  // TestWordHello123Hi
```
#### underscore
Converts any "CamelCased" into an "underscored_word".
```
underscore('TestWord'); // test_word
underscore('TestWord-Hello123Hi'); // test_word-hello123_hi
```
#### humanize
Returns a human-readable string from word
```
humanize('test_word_id');   // Test word
``````
#### variablize
Converts a word like "send_email" to "sendEmail" (Same as camelize but first char is in lowercase)
```
variablize('test_word_id');   // testWordId
```
#### tableize
Converts a class name to its table name (pluralized)
```
tableize('InfoPerson');   // info_people
```
#### slug
Returns a string with all spaces converted to given replacement and non word characters removed. 
Maps special characters to ASCII
```
slug('test word # *@#id');   // test-word-id
slug('яблоко от яблони нe δàŁĒķỒ');   // yabloko-ot-yabloni-ne-daleko
```
#### classify
Converts a table name to its class name. For example, converts "people" to "Person"
```
classify('test_words');   // TestWord
classify('language_japanese');   // LanguageJapanese
```
#### ordinalize
Converts number to its ordinal English form. For example, converts 13 to 13th, 2 to 2nd ...
```
ordinalize(1);   // 1st
ordinalize(2);   // 1nd
ordinalize(3);   // 1rd
ordinalize(13);  // 13th
```
