import { FilterGroup } from "./index";

const C_SINGLE_LINE_LANG = [
    "javascript", "typescript", "java", "c", "cpp", "csharp", "go", "swift", "dart", "groovy",
    "objective-c", "objective-cpp", "fsharp", "cuda-cpp", "d", "less", "scss", "sass", "php", "vb",
    "rust", "kotlin"
];
const C_MULTI_LINE_LANG = [
    ...C_SINGLE_LINE_LANG, "css"
];

const HASH_LINE_LANG = [
    "python", "ruby", "shellscript", "perl", "perl6", "r", "yaml", "coffeescript",
    "clojure", "dockerfile", "ini", "powershell", "php", "haml", "pug", "makefile"
];

const HTML_XML_LANG = [
    "html", "xml", "vue", "vue-html", "razor", "slim", "markdown", "handlebars", "xsl", "svelte"
];

const SQL_LINE_LANG = ["sql", "lua", "diff"];
const LUA_BLOCK_LANG = ["lua"];
const TEX_LINE_LANG = ["latex", "tex", "bibtex"];


export const comments: FilterGroup = {
    id: "comments",
    patterns: [
        {
            regex: /(?<!:)\/\/.*$/gm,
            languages: C_SINGLE_LINE_LANG
        },
        {
            regex: /\/\*[\s\S]*?\*\//gm,
            languages: C_MULTI_LINE_LANG
        },
        {
            regex: /#.*$/gm,
            languages: HASH_LINE_LANG
        },
        {
            regex: /<!--[\s\S]*?-->/gm,
            languages: HTML_XML_LANG,
        },
        {
            regex: /--.*$/gm,
            languages: SQL_LINE_LANG
        },
        {
            regex: /--\[\[[\s\S]*?\]\]/gm,
            languages: LUA_BLOCK_LANG
        },
        {
            regex: /%.*$/gm,
            languages: TEX_LINE_LANG
        },
        {
            regex: /\{\{!--[\s\S]*?--\}\}/gm,
            languages: ["handlebars"]
        },
        {
            regex: /@\*[\s\S]*?\*@/gm,
            languages: ["razor"]
        }
    ]
};