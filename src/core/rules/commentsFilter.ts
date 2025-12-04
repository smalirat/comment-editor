import { FilterRule, FilterContext } from "../ruleTypes";

const ALL_VSCODE_LANGUAGES = [
    "abap", "bat", "bibtex", "clojure", "coffeescript", "c", "cpp", "csharp", "css", "cuda-cpp", "d", "dart",
    "diff", "dockerfile", "dockercompose", "erlang", "fsharp", "go", "groovy", "handlebars", "haml", "haskell",
    "html", "ini", "java", "javascript", "javascriptreact", "json", "jsonc", "julia", "latex", "less",
    "lua", "makefile", "markdown", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "perl6", "php",
    "plaintext", "powershell", "pug", "python", "r", "razor", "ruby", "rust", "scss", "sass", "shaderlab",
    "shellscript", "slim", "sql", "stylus", "svelte", "swift", "typescript", "typescriptreact", "tex",
    "vb", "vue", "vue-html", "xml", "xsl", "yaml"
];

type CommentPattern = {
    regex: RegExp;
    languages: string[];
};

const COMMENT_PATTERNS: CommentPattern[] = [
    {
        regex: /\/\/.*$/gm,
        languages: ["javascript", "typescript", "java", "c", "cpp", "csharp", "go", "swift", "dart", "groovy",
                   "objective-c", "objective-cpp", "fsharp", "cuda-cpp", "d", "less", "scss", "sass", "php", "vb"]
    },
    {
        regex: /\/\*[\s\S]*?\*\//gm,
        languages: ["javascript", "typescript", "java", "c", "cpp", "csharp", "go", "swift", "dart", "groovy",
                   "objective-c", "objective-cpp", "fsharp", "cuda-cpp", "d", "less", "scss", "sass", "php",
                   "vb", "css"]
    },
    {
        regex: /#.*$/gm,
        languages: ["python", "ruby", "shellscript", "perl", "perl6", "r", "yaml", "coffeescript",
                   "clojure", "dockerfile", "ini", "powershell", "php"]
    },
    {
        regex: /<!--[\s\S]*?-->/gm,
        languages: ["html", "markdown", "vue", "vue-html", "xml", "xsl", "svelte", "slim"]
    },
    {
        regex: /{{!--[\s\S]*?--}}/gm,
        languages: ["handlebars"]
    },
    {
        regex: /@\*[\s\S]*?\*@/gm,
        languages: ["razor"]
    },
    {
        regex: /--.*$/gm,
        languages: ["sql", "lua"]
    },
    {
        regex: /--\[\[[\s\S]*?\]\]/gm,
        languages: ["lua"]
    },
    {
        regex: /%.*$/gm,
        languages: ["latex", "tex"]
    }
];

export const CommentsFilter: FilterRule = {
    name: "comments",
    languages: ALL_VSCODE_LANGUAGES,

    apply(code: string, ctx: FilterContext): string {
        const lang = ctx.language;
        const languagesWithoutComments = ["plaintext", "json", "jsonc"];

        if (languagesWithoutComments.includes(lang)) {
            return code;
        }

        let result = code;

        for (const pattern of COMMENT_PATTERNS) {
            if (pattern.languages.includes(lang)) {
                result = result.replace(pattern.regex, "");
            }
        }

        return result;
    }
};