import { FilterGroup } from "./index";

const JS_TS_LANG = ["javascript", "typescript", "javascriptreact", "typescriptreact"];

export const logs: FilterGroup = {
    id: "logs",
    patterns: [
        {
            regex: /\b(console\.(log|debug|info|warn|error|table|time|timeEnd|trace)|alert)\s*\(.*?\);?\s*/gm,
            languages: JS_TS_LANG
        },
        {
            regex: /\bdebugger;?\s*/gm,
            languages: JS_TS_LANG
        },
        {
            regex: /\b(print|logging\.(debug|info|warning|error|critical))\s*\(.*?\)\s*/gm,
            languages: ["python"]
        },
        {
            regex: /\b(echo|print|var_dump|print_r|dd|dump|exit|die)\s*\(?.*?\)?;?\s*/gm,
            languages: ["php"]
        },
        {
            regex: /\b(System\.(out|err)\.(print|println|printf)|Log\.(v|d|i|w|e)|logger\.(debug|info|warn|error))\s*\(.*?\);\s*/gm,
            languages: ["java", "kotlin"]
        },
        {
            regex: /\b(printf|fprintf)\s*\(.*?\);\s*/gm,
            languages: ["c", "cpp", "objective-c", "objective-cpp"]
        },
        {
            regex: /\b(std::cout|std::cerr|std::clog|cout|cerr|clog)\s*<<\s*.*?;?\s*/gm,
            languages: ["c", "cpp", "objective-c", "objective-cpp"]
        },
        {
            regex: /\b(Console\.(Write|WriteLine)|Debug\.(Write|WriteLine|Log)|Trace\.(Write|WriteLine))\s*\(.*?\);\s*/gm,
            languages: ["csharp"]
        },
        {
            regex: /\b(puts|print|p|pp|warn)\s+.*?($|\n)/gm,
            languages: ["ruby"]
        },
        {
            regex: /\b(fmt|log)\.Print(ln|f)?\(.*?\)\s*/gm,
            languages: ["go"]
        },
        {
            regex: /\b(print|debugPrint|NSLog|os_log)\(.*?\)\s*/gm,
            languages: ["swift"]
        },
        {
            regex: /\b(println|print|eprintln|eprint|dbg)! \(.*?\)\s*/gm,
            languages: ["rust"]
        },
        {
            regex: /\b(print|debugPrint)\s*\(.*?\);?\s*/gm,
            languages: ["dart"]
        },
        {
            regex: /\b(echo|printf|Write-Host|Write-Output)\s+.*?($|\n)/gm,
            languages: ["shellscript", "powershell"]
        },
        {
            regex: /\b(PRINT|RAISE (NOTICE|INFO|WARNING|EXCEPTION)|DBMS_OUTPUT\.PUT_LINE)\s+.*?;?\s*/gim,
            languages: ["sql"]
        }
    ]
};