import { locale as enUSLocale } from './en-US';
import { locale as afZALocale } from './af-ZA';
import { locale as sqALLocale } from './sq-AL';
import { locale as amETLocale } from './am-ET';
import { locale as arAELocale } from './ar-AE';
import { locale as arBHLocale } from './ar-BH';
import { locale as arDJLocale } from './ar-DJ';
import { locale as arDZLocale } from './ar-DZ';
import { locale as arEGLocale } from './ar-EG';
import { locale as arERLocale } from './ar-ER';
import { locale as arILLocale } from './ar-IL';
import { locale as esESLocale } from './es-ES';
import { locale as zhCNLocale } from './zh-CN';
import { locale as enGBLocale } from './en-GB';
import { locale as arSALocale } from './ar-SA';
import { locale as ruRULocale } from './ru-RU';
import { locale as ptBRLocale } from './pt-BR';
import { locale as frFRLocale } from './fr-FR';
import { locale as jaJPLocale } from './ja-JP';
import { locale as deDELocale } from './de-DE';
import { locale as bnINLocale } from './bn-IN';
import { LocaleConstants } from './types';

export const locale: LocaleConstants = {
  'en-US': {
    name: 'English (United States)',
    ...enUSLocale
  },
  'af-ZA': {
    name: 'Afrikaans (South Africa)',
    ...afZALocale
  },
  'sq-AL': {
    name: 'Albanian (Albania)',
    ...sqALLocale
  },
  'am-ET': {
    name: 'Amharic (Ethiopia)',
    ...amETLocale
  },
  'ar-AE': {
    name: 'Arabic (United Arab Emirates)',
    ...arAELocale
  },
  'ar-BH': {
    name: 'Arabic (Bahrain)',
    ...arBHLocale
  },
  'ar-DJ': {
    name: 'Arabic (Djibouti)',
    ...arDJLocale
  },
  'ar-DZ': {
    name: 'Arabic (Algeria)',
    ...arDZLocale
  },
  'ar-EG': {
    name: 'Arabic (Egypt)',
    ...arEGLocale
  },
  'ar-ER': {
    name: 'Arabic (Eritrea)',
    ...arERLocale
  },
  'ar-IL': {
    name: 'Arabic (Israel)',
    ...arILLocale
  },
  'es-ES': {
    name: 'Spanish (Spain)',
    ...esESLocale
  },
  'zh-CN': {
    name: 'Chinese (China)',
    ...zhCNLocale
  },
  'en-GB': {
    name: 'English (United Kingdom)',
    ...enGBLocale
  },
  'ar-SA': {
    name: 'Arabic (Saudi Arabia)',
    ...arSALocale
  },
  'ru-RU': {
    name: 'Russian (Russia)',
    ...ruRULocale
  },
  'pt-BR': {
    name: 'Portuguese (Brazil)',
    ...ptBRLocale
  },
  'fr-FR': {
    name: 'French (France)',
    ...frFRLocale
  },
  'ja-JP': {
    name: 'Japanese (Japan)',
    ...jaJPLocale
  },
  'de-DE': {
    name: 'German (Germany)',
    ...deDELocale
  },
  'bn-IN': {
    name: 'Bengali (India)',
    ...bnINLocale
  }
};

// eslint-disable-next-line
const roadmap = {
  'ar-IQ': 'Arabic (Iraq)',
  'ar-JO': 'Arabic (Jordan)',
  'ar-KM': 'Arabic (Comoros)',
  'ar-KW': 'Arabic (Kuwait)',
  'ar-LB': 'Arabic (Lebanon)',
  'ar-LY': 'Arabic (Libya)',
  'ar-MA': 'Arabic (Morocco)',
  'ar-MR': 'Arabic (Mauritania)',
  'ar-OM': 'Arabic (Oman)',
  'ar-PS': 'Arabic (Palestinian Territories)',
  'ar-QA': 'Arabic (Qatar)',
  'ar-SD': 'Arabic (Sudan)',
  'ar-SO': 'Arabic (Somalia)',
  'ar-SS': 'Arabic (South Sudan)',
  'ar-SY': 'Arabic (Syria)',
  'ar-TD': 'Arabic (Chad)',
  'ar-TN': 'Arabic (Tunisia)',
  'ar-YE': 'Arabic (Yemen)',
  'hy-AM': 'Armenian (Armenia)',
  'as-IN': 'Assamese (India)',
  'av-RU': 'Avaric (Russia)',
  'ae': 'Avestan (world)',
  'awa-IN': 'Awadhi (India)',
  'ay-BO': 'Aymara (Bolivia)',
  'ay-PE': 'Aymara (Peru)',
  'az-AZ': 'Azerbaijani (Azerbaijan)',
  'az-Cyrl-AZ': 'Azerbaijani (Cyrillic, Azerbaijan)',
  'az-Latn-AZ': 'Azerbaijani (Latin, Azerbaijan)',
  'ba-RU': 'Bashkir (Russia)',
  'bm-ML': 'Bambara (Mali)',
  'be-BY': 'Belarusian (Belarus)',
  'bn-BD': 'Bengali (Bangladesh)',
  'bh-IN': 'Bihari (India)',
  'bi-VU': 'Bislama (Vanuatu)',
  'bs-BA': 'Bosnian (Bosnia & Herzegovina)',
  'bs-Cyrl-BA': 'Bosnian (Cyrillic, Bosnia & Herzegovina)',
  'bs-Latn-BA': 'Bosnian (Latin, Bosnia & Herzegovina)',
  'br-FR': 'Breton (France)',
  'bg-BG': 'Bulgarian (Bulgaria)',
  'my-MM': 'Burmese (Myanmar (Burma))',
  'ca-AD': 'Catalan (Andorra)',
  'ca-ES': 'Catalan (Spain)',
  'ca-FR': 'Catalan (France)',
  'ca-IT': 'Catalan (Italy)',
  'ch-GU': 'Chamorro (Guam)',
  'ce-RU': 'Chechen (Russia)',
  'chr-US': 'Cherokee (United States)',
  'ny-MW': 'Chichewa (Malawi)',
  'zh-HK': 'Chinese (Traditional, Hong Kong SAR)',
  'zh-MO': 'Chinese (Traditional, Macao SAR)',
  'zh-TW': 'Chinese (Traditional, Taiwan)',
  'co-FR': 'Corsican (France)',
  'cr-CA': 'Cree (Canada)',
  'hr-HR': 'Croatian (Croatia)',
  'hr-Latn-HR': 'Croatian (Latin, Croatia)',
  'cs-CZ': 'Czech (Czech Republic)',
  'da-DK': 'Danish (Denmark)',
  'da-GL': 'Danish (Greenland)',
  'dv-MV': 'Divehi (Maldives)',
  'nl-BE': 'Dutch (Belgium)',
  'nl-NL': 'Dutch (Netherlands)',
  'dz-BT': 'Dzongkha (Bhutan)',
  'en-AU': 'English (Australia)',
  'en-CA': 'English (Canada)',
  'en-IN': 'English (India)',
  'en-IE': 'English (Ireland)',
  'en-JM': 'English (Jamaica)',
  'en-MY': 'English (Malaysia)',
  'en-NZ': 'English (New Zealand)',
  'en-PH': 'English (Philippines)',
  'en-SG': 'English (Singapore)',
  'en-ZA': 'English (South Africa)',
  'en-TT': 'English (Trinidad & Tobago)',
  'eo': 'Esperanto (world)',
  'et-EE': 'Estonian (Estonia)',
  'ee-GH': 'Ewe (Ghana)',
  'ee-TG': 'Ewe (Togo)',
  'fo-DK': 'Faroese (Denmark)',
  'fo-FO': 'Faroese (Faroe Islands)',
  'fj-FJ': 'Fijian (Fiji)',
  'fi-FI': 'Finnish (Finland)',
  'fr-BE': 'French (Belgium)',
  'fr-CA': 'French (Canada)',
  'fr-CH': 'French (Switzerland)',
  'fr-LU': 'French (Luxembourg)',
  'fr-MC': 'French (Monaco)',
  'fr-VU': 'French (Vanuatu)',
  'ff-CM': 'Fulah (Cameroon)',
  'ff-GN': 'Fulah (Guinea)',
  'ff-MR': 'Fulah (Mauritania)',
  'ff-SN': 'Fulah (Senegal)',
  'gl-ES': 'Galician (Spain)',
  'ka-GE': 'Georgian (Georgia)',
  'de-AT': 'German (Austria)',
  'de-BE': 'German (Belgium)',
  'de-CH': 'German (Switzerland)',
  'de-LU': 'German (Luxembourg)',
  'de-LI': 'German (Liechtenstein)',
  'el-CY': 'Greek (Cyprus)',
  'el-GR': 'Greek (Greece)',
  'gn-PY': 'Guarani (Paraguay)',
  'gu-IN': 'Gujarati (India)',
  'ht-HT': 'Haitian Creole (Haiti)',
  'ha-GH': 'Hausa (Ghana)',
  'ha-NE': 'Hausa (Niger)',
  'ha-NG': 'Hausa (Nigeria)',
  'haw-US': 'Hawaiian (United States)',
  'he-IL': 'Hebrew (Israel)',
  'hi-IN': 'Hindi (India)',
  'hil-PH': 'Hiligaynon (Philippines)',
  'hu-HU': 'Hungarian (Hungary)',
  'is-IS': 'Icelandic (Iceland)',
  'ig-NG': 'Igbo (Nigeria)',
  'id-ID': 'Indonesian (Indonesia)',
  'ia': 'Interlingua (world)',
  'ie': 'Interlingue (world)',
  'iu-CA': 'Inuktitut (Canada)',
  'iu-Latn-CA': 'Inuktitut (Latin, Canada)',
  'ik-US': 'Inupiaq (United States)',
  'ga-IE': 'Irish (Ireland)',
  'it-CH': 'Italian (Switzerland)',
  'it-IT': 'Italian (Italy)',
  'jv-ID': 'Javanese (Indonesia)',
  'kea-CV': 'Kabuverdianu (Cape Verde)',
  'kl-GL': 'Kalaallisut (Greenland)',
  'kn-IN': 'Kannada (India)',
  'kr-NG': 'Kanuri (Nigeria)',
  'ks-IN': 'Kashmiri (India)',
  'kk-KZ': 'Kazakh (Kazakhstan)',
  'km-KH': 'Khmer (Cambodia)',
  'ki-KE': 'Kikuyu (Kenya)',
  'rw-RW': 'Kinyarwanda (Rwanda)',
  'kv-RU': 'Komi (Russia)',
  'kg-CD': 'Kongo (Democratic Republic of the Congo)',
  'kok-IN': 'Konkani (India)',
  'ko-KR': 'Korean (South Korea)',
  'ku-IQ': 'Kurdish (Iraq)',
  'ku-IR': 'Kurdish (Iran)',
  'ku-TR': 'Kurdish (Turkey)',
  'kj-AO': 'Kwanyama (Angola)',
  'ky-KG': 'Kyrgyz (Kyrgyzstan)',
  'lo-LA': 'Lao (Laos)',
  'la': 'Latin (world)',
  'lv-LV': 'Latvian (Latvia)',
  'li-NL': 'Limburgish (Netherlands)',
  'ln-AO': 'Lingala (Angola)',
  'ln-CD': 'Lingala (Democratic Republic of the Congo)',
  'ln-CF': 'Lingala (Central African Republic)',
  'ln-CG': 'Lingala (Congo - Brazzaville)',
  'lt-LT': 'Lithuanian (Lithuania)',
  'lu-CD': 'Luba-Katanga (Democratic Republic of the Congo)',
  'lb-LU': 'Luxembourgish (Luxembourg)',
  'mk-MK': 'Macedonian (North Macedonia)',
  'mg-MG': 'Malagasy (Madagascar)',
  'ms-BN': 'Malay (Brunei)',
  'ms-MY': 'Malay (Malaysia)',
  'ml-IN': 'Malayalam (India)',
  'mt-MT': 'Maltese (Malta)',
  'gv-IM': 'Manx (Isle of Man)',
  'mi-NZ': 'Maori (New Zealand)',
  'mr-IN': 'Marathi (India)',
  'mh-MH': 'Marshallese (Marshall Islands)',
  'mn-MN': 'Mongolian (Mongolia)',
  'mn-Mong-CN': 'Mongolian (Traditional Mongolian, China)',
  'sr-ME': 'Montenegrin (Montenegro)',
  'sr-Latn-ME': 'Montenegrin (Latin, Montenegro)',
  'mos-CM': 'More (Cameroon)',
  'naq-NA': 'Nama (Namibia)',
  'na-NR': 'Nauru (Nauru)',
  'nv-US': 'Navajo (United States)',
  'ng-NZ': 'Ndonga (Namibia)',
  'ne-IN': 'Nepali (India)',
  'ne-NP': 'Nepali (Nepal)',
  'nl-AW': 'Dutch (Aruba)',
  'nl-BQ': 'Dutch (Bonaire, Sint Eustatius and Saba)',
  'nl-CW': 'Dutch (Curaçao)',
  'nl-SX': 'Dutch (Sint Maarten)',
  'nb-NO': 'Norwegian Bokmål (Norway)',
  'nn-NO': 'Norwegian Nynorsk (Norway)',
  'no-SJ': 'Norwegian (Svalbard & Jan Mayen)',
  'no-NO': 'Norwegian (Norway)',
  'nqo-GN': 'N\'ko (Guinea)',
  'oc-FR': 'Occitan (France)',
  'oj-CA': 'Ojibwa (Canada)',
  'oj-US': 'Ojibwa (United States)',
  'cu': 'Old Church Slavonic (world)',
  'or-IN': 'Oriya (India)',
  'om-ET': 'Oromo (Ethiopia)',
  'om-KE': 'Oromo (Kenya)',
  'os-RU': 'Ossetic (Russia)',
  'os-GE': 'Ossetic (Georgia)',
  'pi': 'Pāli (world)',
  'ps-AF': 'Pashto (Afghanistan)',
  'fa-AF': 'Persian (Afghanistan)',
  'fa-IR': 'Persian (Iran)',
  'pl-PL': 'Polish (Poland)',
  'pt-CV': 'Portuguese (Cape Verde)',
  'pt-GW': 'Portuguese (Guinea-Bissau)',
  'pt-LU': 'Portuguese (Luxembourg)',
  'pt-MO': 'Portuguese (Macao SAR)',
  'pt-MZ': 'Portuguese (Mozambique)',
  'pt-PT': 'Portuguese (Portugal)',
  'pt-ST': 'Portuguese (São Tomé & Príncipe)',
  'pt-TL': 'Portuguese (Timor-Leste)',
  'pa-IN': 'Punjabi (India)',
  'qu-BO': 'Quechua (Bolivia)',
  'qu-EC': 'Quechua (Ecuador)',
  'qu-PE': 'Quechua (Peru)',
  'ro-MD': 'Romanian (Moldova)',
  'ro-RO': 'Romanian (Romania)',
  'rm-CH': 'Romansh (Switzerland)',
  'rn-BI': 'Rundi (Burundi)',
  'ru-BY': 'Russian (Belarus)',
  'ru-KG': 'Russian (Kyrgyzstan)',
  'ru-KZ': 'Russian (Kazakhstan)',
  'ru-MD': 'Russian (Moldova)',
  'ru-UA': 'Russian (Ukraine)',
  'sm-AS': 'Samoan (American Samoa)',
  'sm-WS': 'Samoan (Samoa)',
  'sg-CF': 'Sango (Central African Republic)',
  'sa-IN': 'Sanskrit (India)',
  'sat-IN': 'Santali (India)',
  'sc-IT': 'Sardinian (Italy)',
  'gd': 'Scots Gaelic (United Kingdom)',
  'sr-BA': 'Serbian (Bosnia & Herzegovina)',
  'sr-Cyrl-BA': 'Serbian (Cyrillic, Bosnia & Herzegovina)',
  'sr-Cyrl-ME': 'Serbian (Cyrillic, Montenegro)',
  'sr-Cyrl-RS': 'Serbian (Cyrillic, Serbia)',
  'sr-Latn-RS': 'Serbian (Latin, Serbia)',
  'st-LS': 'Sesotho (Lesotho)',
  'st-ZA': 'Sesotho (South Africa)',
  'sn-ZW': 'Shona (Zimbabwe)',
  'ii-CN': 'Sichuan Yi (China)',
  'sd-IN': 'Sindhi (India)',
  'si-LK': 'Sinhala (Sri Lanka)',
  'sk-SK': 'Slovak (Slovakia)',
  'sl-SI': 'Slovenian (Slovenia)',
  'so-DJ': 'Somali (Djibouti)',
  'so-ET': 'Somali (Ethiopia)',
  'so-KE': 'Somali (Kenya)',
  'so-SO': 'Somali (Somalia)',
  'es-AR': 'Spanish (Argentina)',
  'es-BO': 'Spanish (Bolivia)',
  'es-CL': 'Spanish (Chile)',
  'es-CO': 'Spanish (Colombia)',
  'es-CR': 'Spanish (Costa Rica)',
  'es-DO': 'Spanish (Dominican Republic)',
  'es-EC': 'Spanish (Ecuador)',
  'es-GQ': 'Spanish (Equatorial Guinea)',
  'es-GT': 'Spanish (Guatemala)',
  'es-HN': 'Spanish (Honduras)',
  'es-MX': 'Spanish (Mexico)',
  'es-NI': 'Spanish (Nicaragua)',
  'es-PA': 'Spanish (Panama)',
  'es-PE': 'Spanish (Peru)',
  'es-PR': 'Spanish (Puerto Rico)',
  'es-PY': 'Spanish (Paraguay)',
  'es-SV': 'Spanish (El Salvador)',
  'es-US': 'Spanish (United States)',
  'es-UY': 'Spanish (Uruguay)',
  'es-VE': 'Spanish (Venezuela)',
  'su-ID': 'Sundanese (Indonesia)',
  'sw-KE': 'Swahili (Kenya)',
  'sw-TZ': 'Swahili (Tanzania)',
  'ss-SZ': 'Swati (Eswatini)',
  'sv-AX': 'Swedish (Åland Islands)',
  'sv-FI': 'Swedish (Finland)',
  'sv-SE': 'Swedish (Sweden)',
  'syrc': 'Syriac (world)',
  'syrc-SY': 'Syriac (Syria)',
  'tg-TJ': 'Tajik (Tajikistan)',
  'ta-IN': 'Tamil (India)',
  'ta-LK': 'Tamil (Sri Lanka)',
  'tt-RU': 'Tatar (Russia)',
  'te-IN': 'Telugu (India)',
  'th-TH': 'Thai (Thailand)',
  'bo-CN': 'Tibetan (China)',
  'ti-ER': 'Tigrinya (Eritrea)',
  'ti-ET': 'Tigrinya (Ethiopia)',
  'to-TO': 'Tongan (Tonga)',
  'ts-ZA': 'Tsonga (South Africa)',
  'tn-BW': 'Tswana (Botswana)',
  'tn-ZA': 'Tswana (South Africa)',
  'tr-CY': 'Turkish (Cyprus)',
  'tr-TR': 'Turkish (Turkey)',
  'tk-TM': 'Turkmen (Turkmenistan)',
  'ug-CN': 'Uighur (China)',
  'uk-UA': 'Ukrainian (Ukraine)',
  'ur-IN': 'Urdu (India)',
  'ur-PK': 'Urdu (Pakistan)',
  'uz-Arab-AF': 'Uzbek (Arabic, Afghanistan)',
  'uz-Cyrl-UZ': 'Uzbek (Cyrillic, Uzbekistan)',
  'uz-Latn-UZ': 'Uzbek (Latin, Uzbekistan)',
  've-ZA': 'Venda (South Africa)',
  'vi-VN': 'Vietnamese (Vietnam)',
  'vo': 'Volapük (world)',
  'wa-BE': 'Walloon (Belgium)',
  'cy-GB': 'Welsh (United Kingdom)',
  'wo-SN': 'Wolof (Senegal)',
  'xh-ZA': 'Xhosa (South Africa)',
  'sah-RU': 'Yakut (Russia)',
  'yi': 'Yiddish (world)',
  'yo-NG': 'Yoruba (Nigeria)',
  'za-CN': 'Zhuang (China)',
  'zu-ZA': 'Zulu (South Africa)'
};
