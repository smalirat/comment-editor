export interface CommentRules {
    singleLine?: RegExp;
    multiLine?: RegExp;
}

// Reglas estilo C-like: // ...   y   /* ... */
const cStyle: CommentRules = {
    singleLine: /\/\/.*$/gm,
    multiLine: /\/\*[\s\S]*?\*\//gm
};

export const defaultCommentRules: Record<string, CommentRules> = {
    javascript: cStyle,
    typescript: cStyle,
    java: cStyle,
    c: cStyle,
    cpp: cStyle,
    csharp: cStyle,
    kotlin: cStyle,
    swift: cStyle,
    rust: cStyle,
    go: cStyle,
    scala: cStyle,

    php: {
        singleLine: /(?:\/\/|#).*$/gm,
        multiLine: /\/\*[\s\S]*?\*\//gm
    },

    python: {
        singleLine: /#.*$/gm,
        multiLine: /("""|''')[\s\S]*?\1/gm
    },

    ruby: {
        singleLine: /#.*$/gm,
        multiLine: /=begin[\s\S]*?=end/gm
    },

    bash: {
        singleLine: /#.*$/gm
    },
    sh: {
        singleLine: /#.*$/gm
    },

    sql: {
        singleLine: /--.*$/gm,
        multiLine: /\/\*[\s\S]*?\*\//gm
    },

    lua: {
        singleLine: /--.*$/gm,
        multiLine: /--\[\[[\s\S]*?]]/gm
    },

    haskell: {
        singleLine: /--.*$/gm,
        multiLine: /\{\-[\s\S]*?-\}/gm
    }
};
