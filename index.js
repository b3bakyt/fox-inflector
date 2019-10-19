/**
 * PhInflector based on BaseInflector from Yii 2.0 - this is just a simple PHP 5.2 backport
 *
 * @author Antonio Ramirez <amigo.cobos@gmail.com>
 * @author Tobias Munk <schmunk@usrbin.de>
 * @author Kai Ziefle <k.ziefle@herzogkommunikation.de>
 * @since 0.1
 */

/**
 * @var array the rules for converting a word into its plural form.
 * The keys are the regular expressions and the values are the corresponding replacements.
 */
const PLURALS = {
    '([nrlm]ese|deer|fish|sheep|measles|ois|pox|media)$': {replace: '$1', option: 'i'},
    '(sea[- ]bass)$': {replace: '$1', option: 'i'},
    '(m)ove$': {replace: '$1oves', option: 'i'},
    '(f)oot$': {replace: '$1eet', option: 'i'},
    '(h)uman$': {replace: '$1umans', option: 'i'},
    '(s)tatus$': {replace: '$1tatuses', option: 'i'},
    '(s)taff$': {replace: '$1taff', option: 'i'},
    '(t)ooth$': {replace: '$1eeth', option: 'i'},
    '(quiz)$': {replace: '$1zes', option: 'i'},
    '^(ox)$': {replace: '$1$2en', option: 'i'},
    '([m|l])ouse$': {replace: '$1ice', option: 'i'},
    '(matr|vert|ind)(ix|ex)$': {replace: '$1ices', option: 'i'},
    '(x|ch|ss|sh)$': {replace: '$1es', option: 'i'},
    '([^aeiouy]|qu)y$': {replace: '$1ies', option: 'i'},
    '(hive)$': {replace: '$1s', option: 'i'},
    '(?:([^f])fe|([lr])f)$': {replace: '$1$2ves', option: 'i'},
    'sis$': {replace: 'ses', option: 'i'},
    '([ti])um$': {replace: '$1a', option: 'i'},
    '(p)erson$': {replace: '$1eople', option: 'i'},
    '(m)an$': {replace: '$1en', option: 'i'},
    '(c)hild$': {replace: '$1hildren', option: 'i'},
    '(buffal|tomat|potat|ech|her|vet)o$': {replace: '$1oes', option: 'i'},
    '(alumn|bacill|cact|foc|fung|nucle|radi|stimul|syllab|termin|vir)us$': {replace: '$1i', option: 'i'},
    'us$': {replace: 'uses', option: 'i'},
    '(alias)$': {replace: '$1es', option: 'i'},
    '(ax|cris|test)is$': {replace: '$1es', option: 'i'},
    's$': {replace: 's'},
    '^$': {replace: ''},
    '$': {replace: 's'},
};

/**
 * @var array the rules for converting a word into its singular form.
 * The keys are the regular expressions and the values are the corresponding replacements.
 */
const SINGULARS = {
    '([nrlm]ese|deer|fish|sheep|measles|ois|pox|media|ss)$': {replace: '$1', option: 'i'},
    '^(sea[- ]bass)$': {replace: '$1', option: 'i'},
    '(s)tatuses$': {replace: '$1tatus', option: 'i'},
    '(f)eet$': {replace: '$1oot', option: 'i'},
    '(t)eeth$': {replace: '$1ooth', option: 'i'},
    '^(.*)(menu)s$': {replace: '$1$2', option: 'i'},
    '(quiz)zes$': {replace: '$$1', option: 'i'},
    '(matr)ices$': {replace: '$1ix', option: 'i'},
    '(vert|ind)ices$': {replace: '$1ex', option: 'i'},
    '^(ox)en': {replace: '$1', option: 'i'},
    '(alias)(es)*$': {replace: '$1', option: 'i'},
    '(alumn|bacill|cact|foc|fung|nucle|radi|stimul|syllab|termin|viri?)i$': {replace: '$1us', option: 'i'},
    '([ftw]ax)es': {replace: '$1', option: 'i'},
    '(cris|ax|test)es$': {replace: '$1is', option: 'i'},
    '(shoe|slave)s$': {replace: '$1', option: 'i'},
    '(o)es$': {replace: '$1', option: 'i'},
    'ouses$/': 'ouse',
    '([^a])uses$/': '$1us',
    '([m|l])ice$': {replace: '$1ouse', option: 'i'},
    '(x|ch|ss|sh)es$': {replace: '$1', option: 'i'},
    '(m)ovies$': {replace: '$1$2ovie', option: 'i'},
    '(s)eries$': {replace: '$1$2eries', option: 'i'},
    '([^aeiouy]|qu)ies$': {replace: '$1y', option: 'i'},
    '([lr])ves$': {replace: '$1f', option: 'i'},
    '(tive)s$': {replace: '$1', option: 'i'},
    '(hive)s$': {replace: '$1', option: 'i'},
    '(drive)s$': {replace: '$1', option: 'i'},
    '([^fo])ves$': {replace: '$1fe', option: 'i'},
    '(^analy)ses$': {replace: '$1sis', option: 'i'},
    '(analy|diagno|^ba|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': {replace: '$1$2sis', option: 'i'},
    '([ti])a$': {replace: '$1um', option: 'i'},
    '(p)eople$': {replace: '$1$2erson', option: 'i'},
    '(m)en$': {replace: '$1an', option: 'i'},
    '(c)hildren$': {replace: '$1$2hild', option: 'i'},
    '(n)ews$': {replace: '$1$2ews', option: 'i'},
    'eaus$': {replace: 'eau'},
    '^(.*us)$': {replace: '$\1'},
    's$': {replace: '', option: 'i'},
};

/**
 * @var array the special rules for converting a word between its plural form and singular form.
 * The keys are the special words in singular form, and the values are the corresponding plural form.
 */
const SINGLE_PLURALS = {
    'atlas': 'atlases',
    'beef': 'beefs',
    'brother': 'brothers',
    'cafe': 'cafes',
    'child': 'children',
    'cookie': 'cookies',
    'corpus': 'corpuses',
    'cow': 'cows',
    'curve': 'curves',
    'foe': 'foes',
    'ganglion': 'ganglions',
    'genie': 'genies',
    'genus': 'genera',
    'graffito': 'graffiti',
    'hoof': 'hoofs',
    'loaf': 'loaves',
    'man': 'men',
    'money': 'monies',
    'mongoose': 'mongooses',
    'move': 'moves',
    'mythos': 'mythoi',
    'niche': 'niches',
    'numen': 'numina',
    'occiput': 'occiputs',
    'octopus': 'octopuses',
    'opus': 'opuses',
    'ox': 'oxen',
    'penis': 'penises',
    'sex': 'sexes',
    'soliloquy': 'soliloquies',
    'testis': 'testes',
    'trilby': 'trilbys',
    'turf': 'turfs',
    'wave': 'waves',
    'Amoyese': 'Amoyese',
    'bison': 'bison',
    'Borghese': 'Borghese',
    'bream': 'bream',
    'breeches': 'breeches',
    'britches': 'britches',
    'buffalo': 'buffalo',
    'cantus': 'cantus',
    'carp': 'carp',
    'chassis': 'chassis',
    'clippers': 'clippers',
    'cod': 'cod',
    'coitus': 'coitus',
    'Congoese': 'Congoese',
    'contretemps': 'contretemps',
    'corps': 'corps',
    'debris': 'debris',
    'diabetes': 'diabetes',
    'djinn': 'djinn',
    'eland': 'eland',
    'elk': 'elk',
    'equipment': 'equipment',
    'Faroese': 'Faroese',
    'flounder': 'flounder',
    'Foochowese': 'Foochowese',
    'gallows': 'gallows',
    'Genevese': 'Genevese',
    'Genoese': 'Genoese',
    'Gilbertese': 'Gilbertese',
    'graffiti': 'graffiti',
    'headquarters': 'headquarters',
    'herpes': 'herpes',
    'hijinks': 'hijinks',
    'Hottentotese': 'Hottentotese',
    'information': 'information',
    'innings': 'innings',
    'jackanapes': 'jackanapes',
    'Kiplingese': 'Kiplingese',
    'Kongoese': 'Kongoese',
    'Lucchese': 'Lucchese',
    'mackerel': 'mackerel',
    'Maltese': 'Maltese',
    'mews': 'mews',
    'moose': 'moose',
    'mumps': 'mumps',
    'Nankingese': 'Nankingese',
    'news': 'news',
    'nexus': 'nexus',
    'Niasese': 'Niasese',
    'Pekingese': 'Pekingese',
    'Piedmontese': 'Piedmontese',
    'pincers': 'pincers',
    'Pistoiese': 'Pistoiese',
    'pliers': 'pliers',
    'Portuguese': 'Portuguese',
    'proceedings': 'proceedings',
    'rabies': 'rabies',
    'rice': 'rice',
    'rhinoceros': 'rhinoceros',
    'salmon': 'salmon',
    'Sarawakese': 'Sarawakese',
    'scissors': 'scissors',
    'series': 'series',
    'Shavese': 'Shavese',
    'shears': 'shears',
    'siemens': 'siemens',
    'species': 'species',
    'swine': 'swine',
    'testes': 'testes',
    'trousers': 'trousers',
    'trout': 'trout',
    'tuna': 'tuna',
    'Vermontese': 'Vermontese',
    'Wenchowese': 'Wenchowese',
    'whiting': 'whiting',
    'wildebeest': 'wildebeest',
    'Yengeese': 'Yengeese',
    'aircraft': 'aircraft',
    'alumna': 'alumnae',
    'fez': 'fezes',
    'goose': 'geese',
    'locus': 'loci',
    'minutia': 'minutiae',
    'ovum': 'ova',
    'phylum': 'phyla',
    'thief': 'thieves',
};

const PLURAL_SINGLES = Object.entries(SINGLE_PLURALS).reduce((res, val) => {
    return {...res, [val[1]]: val[0]}
}, {});


/**
 * @var array map of special chars and its translation. This is used by [[slug()]].
 */
const TRANSLITERATION = {
    // Latin
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C',
    'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
    'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ő': 'O',
    'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH',
    'ß': 'ss',
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o',
    'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th',
    'ÿ': 'y',
    // Latin symbols
    '©': '(c)',
    // Greek
    'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H', 'Θ': '8',
    'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': '3', 'Ο': 'O', 'Π': 'P',
    'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W',
    'Ά': 'A', 'Έ': 'E', 'Ί': 'I', 'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W', 'Ϊ': 'I',
    'Ϋ': 'Y',
    'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h', 'θ': '8',
    'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3', 'ο': 'o', 'π': 'p',
    'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f', 'χ': 'x', 'ψ': 'ps', 'ω': 'w',
    'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's',
    'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i',
    // Turkish
    'Ş': 'S', 'İ': 'I', 'Ç': 'C', 'Ü': 'U', 'Ö': 'O', 'Ğ': 'G',
    'ş': 's', 'ı': 'i', 'ç': 'c', 'ü': 'u', 'ö': 'o', 'ğ': 'g',
    // Russian
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh',
    'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
    'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C',
    'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu',
    'Я': 'Ya',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c',
    'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
    'я': 'ya',
    // Ukrainian
    'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G',
    'є': 'ye', 'і': 'i', 'ї': 'yi', 'ґ': 'g',
    // Czech
    'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ů': 'U',
    'Ž': 'Z',
    'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't', 'ů': 'u',
    'ž': 'z',
    // Polish
    'Ą': 'A', 'Ć': 'C', 'Ę': 'e', 'Ł': 'L', 'Ń': 'N', 'Ó': 'o', 'Ś': 'S', 'Ź': 'Z',
    'Ż': 'Z',
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z',
    'ż': 'z',
    // Latvian
    'Ā': 'A', 'Č': 'C', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'i', 'Ķ': 'k', 'Ļ': 'L', 'Ņ': 'N',
    'Š': 'S', 'Ū': 'u', 'Ž': 'Z',
    'ā': 'a', 'č': 'c', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l', 'ņ': 'n',
    'š': 's', 'ū': 'u', 'ž': 'z',
    //Vietnamese
    'Ấ': 'A', 'Ầ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
    'Ắ': 'A', 'Ằ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
    'Ố': 'O', 'Ồ': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
    'Ớ': 'O', 'Ờ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
    'Ế': 'E', 'Ề': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
    'ấ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
    'ắ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
    'ố': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
    'ớ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
    'ế': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e'
};

const Inflector = {
    /**
     * Converts a word to its plural form.
     * Note that this is for English only!
     * For example, 'apple' will become 'apples', and 'child' will become 'children'.
     * @param string word the word to be pluralized
     * @return string the pluralized word
     */
    pluralize: function(word) {
        if (SINGLE_PLURALS[word])
            return SINGLE_PLURALS[word];

        for (let rule in PLURALS) {
            const replaceData = PLURALS[rule];

            let match = word.match(new RegExp(rule, replaceData.option));
            if (match)
                return word.replace(new RegExp(rule, replaceData.option), replaceData.replace);
        }
        return word;
    },
    /**
     * Returns the singular of the word
     * @param string word the english word to singularize
     * @return string Singular noun.
     */
    singularize: function(word) {
        const result = PLURAL_SINGLES[word];
        if (result) {
            return result;
        }
        for (let rule in SINGULARS) {
            const replaceData = SINGULARS[rule];

            let match = word.match(new RegExp(rule, replaceData.option));
            if (match)
                return word.replace(new RegExp(rule, replaceData.option), replaceData.replace);
        }
        return word;
    },

    /**
     * Converts an underscored or CamelCase word into a English
     * sentence.
     * @param string words
     * @param boolean ucAll whether to set all words to uppercase
     * @return string
     */
    titleize: function(words, ucAll = false) {
        words = this.humanize(this.underscore(words), ucAll);
        return ucAll ? words.toUpperCase() : words.charAt(0).toUpperCase() + words.slice(1);
    },

    /**
     * Returns given word as CamelCased
     * Converts a word like "send_email" to "SendEmail". It
     * will remove non alphanumeric character from the word, so
     * "who's online" will be converted to "WhoSOnline"
     * @see variablize()
     * @param string word the word to CamelCase
     * @return string
     */
    camelize: function(word)
    {
        return word
            .replace(/[^A-Za-z0-9]+/ig, ' ')
            .split(' ')
            .map(val => val.charAt(0).toUpperCase() + val.slice(1))
            .join('');
    },

    /**
     * Converts a CamelCase name into space-separated words.
     * For example, 'PostTag' will be converted to 'Post Tag'.
     * @param string name the string to be converted
     * @param boolean ucwords whether to capitalize the first letter in each word
     * @return string the resulting words
     */
    camel2words: function(name, ucwords = true)
    {
        return name.replace(/([A-Z])/g, ' $1')
            .replace(/([\-\_\.])/g, ' ')
            .replace(/(  )/g, ' ')
            .toLowerCase()
            .trim()
            .split(' ')
            .map(val => ucwords ? val.charAt(0).toUpperCase() + val.slice(1) : val)
            .join(' ');
    },

    /**
     * Converts a CamelCase name into an ID in lowercase.
     * Words in the ID may be concatenated using the specified character (defaults to '-').
     * For example, 'PostTag' will be converted to 'post-tag'.
     * @param string name the string to be converted
     * @param string separator the character used to concatenate the words in the ID
     * @return string the resulting ID
     */
    camel2id: function(name, separator = '-')
    {
        return name.replace(/([A-Z])/g, ' $1')
            .replace(/([\-\_\.])/g, ' ')
            .replace(/(  )/g, ' ')
            .toLowerCase()
            .trim()
            .split(' ')
            .join(separator);
    },

    /**
     * Converts an ID into a CamelCase name.
     * Words in the ID separated by `separator` (defaults to '-') will be concatenated into a CamelCase name.
     * For example, 'post-tag' is converted to 'PostTag'.
     * @param string id the ID to be converted
     * @param string separator the character used to separate the words in the ID
     * @return string the resulting CamelCase name
     */
    id2camel: function(id, separator = '-')
    {
        return id
            .split(separator)
            .map(val => val.trim())
            .map(val => val.charAt(0).toUpperCase() + val.slice(1))
            .join('');
        // return str_replace(' ', '', ucwords(implode(' ', explode(separator, id))));
    },

    /**
     * Converts any "CamelCased" into an "underscored_word".
     * @param string words the word(s) to underscore
     * @return string
     */
    underscore: function(words)
    {
        return words.replace(new RegExp('(?<=\\w)([A-Z])', 'g'), '_$1').toLowerCase();
    },

    /**
     * Returns a human-readable string from word
     * @param string word the string to humanize
     * @param boolean ucAll whether to set all words to uppercase or not
     * @return string
     */
    humanize: function(word, ucAll = false)
    {
        let words = word.replace(/_id/, '').replace(/_/g, ' ');
        return ucAll ? words.toUpperCase() : words.charAt(0).toUpperCase() + words.slice(1);
    },

    // /**
    //  * Same as camelize but first char is in lowercase.
    //  * Converts a word like "send_email" to "sendEmail". It
    //  * will remove non alphanumeric character from the word, so
    //  * "who's online" will be converted to "whoSOnline"
    //  * @param string word to lowerCamelCase
    //  * @return string
    //  */
    // variablize: function(word)
    // {
    //     word = this.camelize(word);
    //     return strtolower(word[0]) . substr(word, 1);
    // },
    // /**
    //  * Converts a class name to its table name (pluralized)
    //  * naming conventions. For example, converts "Person" to "people"
    //  * @param string className the class name for getting related table_name
    //  * @return string
    //  */
    // tableize: function(className)
    // {
    //     return this.pluralize(this.underscore(className));
    // },
    // /**
    //  * Returns a string with all spaces converted to given replacement and
    //  * non word characters removed.  Maps special characters to ASCII using
    //  * [[transliteration]] array.
    //  * @param string string An arbitrary string to convert
    //  * @param string replacement The replacement to use for spaces
    //  * @param boolean lowercase whether to return the string in lowercase or not. Defaults to `true`.
    //  * @return string The converted string.
    //  */
    // slug: function(string, replacement = '-', lowercase = true)
    // {
    //     string = str_replace(array_keys(this.transliteration), this.transliteration, string);
    //     string = preg_replace('/[^\p{L}\p{Nd}]+/u', replacement, string);
    //     string = trim(string, replacement);
    //     return lowercase ? strtolower(string) : string;
    // },
    // /**
    //  * Converts a table name to its class name. For example, converts "people" to "Person"
    //  * @param string tableName
    //  * @return string
    //  */
    // classify: function(tableName)
    // {
    //     return this.camelize(this.singularize(tableName));
    // },
    // /**
    //  * Converts number to its ordinal English form. For example, converts 13 to 13th, 2 to 2nd ...
    //  * @param integer number the number to get its ordinal value
    //  * @return string
    //  */
    // ordinalize: function(number)
    // {
    //     if (in_(number % 100), range(11, 13)) {
    //         return number . 'th';
    //     }
    //     switch (number % 10) {
    //         case 1: return number . 'st';
    //         case 2: return number . 'nd';
    //         case 3: return number . 'rd';
    //         default: return number . 'th';
    //     }
    // }
}

module.exports = Inflector;
