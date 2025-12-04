import { FilterRule, FilterContext } from "../ruleTypes";

type LogPattern = {
    regex: RegExp;
    description: string;
};

const LOG_PATTERNS: Record<string, LogPattern[]> = {
    "javascript": [
        { regex: /\bconsole\.(log|debug|info|warn|error|table|time|timeEnd|trace)\(.*?\);?/gm, description: "console.*() methods" },
        { regex: /alert\(.*?\);?/gm, description: "alert() calls" },
        { regex: /debugger;?/gm, description: "debugger statements" }
    ],
    "typescript": [
        { regex: /\bconsole\.(log|debug|info|warn|error|table|time|timeEnd|trace)\(.*?\);?/gm, description: "console.*() methods" },
        { regex: /alert\(.*?\);?/gm, description: "alert() calls" },
        { regex: /debugger;?/gm, description: "debugger statements" }
    ],
    "typescriptreact": [
        { regex: /\bconsole\.(log|debug|info|warn|error|table|time|timeEnd|trace)\(.*?\);?/gm, description: "console.*() methods" },
        { regex: /alert\(.*?\);?/gm, description: "alert() calls" },
        { regex: /debugger;?/gm, description: "debugger statements" }
    ],
    "javascriptreact": [
        { regex: /\bconsole\.(log|debug|info|warn|error|table|time|timeEnd|trace)\(.*?\);?/gm, description: "console.*() methods" },
        { regex: /alert\(.*?\);?/gm, description: "alert() calls" },
        { regex: /debugger;?/gm, description: "debugger statements" }
    ],

    "php": [
        { regex: /\becho\s+.*?;?/gm, description: "echo statements" },
        { regex: /\bprint\s+.*?;?/gm, description: "print statements" },
        { regex: /\bvar_dump\(.*?\);?/gm, description: "var_dump() calls" },
        { regex: /\bprint_r\(.*?\);?/gm, description: "print_r() calls" },
        { regex: /\bdd\(.*?\);?/gm, description: "dd() calls (Laravel)" },
        { regex: /\bdump\(.*?\);?/gm, description: "dump() calls" }
    ],

    "python": [
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\blogging\.(debug|info|warning|error|critical)\(.*?\)/gm, description: "logging.*() methods" },
        { regex: /#\s*TODO:.*$/gm, description: "TODO comments" },
        { regex: /#\s*FIXME:.*$/gm, description: "FIXME comments" },
        { regex: /#\s*DEBUG:.*$/gm, description: "DEBUG comments" }
    ],

    "java": [
        { regex: /\bSystem\.out\.(print|println|printf)\(.*?\);?/gm, description: "System.out.*() calls" },
        { regex: /\bSystem\.err\.(print|println|printf)\(.*?\);?/gm, description: "System.err.*() calls" },
        { regex: /\bLog\.(v|d|i|w|e)\(.*?\);?/gm, description: "Log.*() calls (Android)" },
        { regex: /\blogger\.(debug|info|warn|error)\(.*?\);?/gm, description: "logger.*() calls" }
    ],

    "csharp": [
        { regex: /\bConsole\.(Write|WriteLine)\(.*?\);?/gm, description: "Console.*() calls" },
        { regex: /\bDebug\.(Write|WriteLine|Log|LogError|LogWarning)\(.*?\);?/gm, description: "Debug.*() calls" },
        { regex: /\bTrace\.(Write|WriteLine)\(.*?\);?/gm, description: "Trace.*() calls" }
    ],

    "c": [
        { regex: /\bprintf\(.*?\);?/gm, description: "printf() calls" },
        { regex: /\bfprintf\(.*?\);?/gm, description: "fprintf() calls" },
        { regex: /\bcout\s*<<.*?;?/gm, description: "cout << statements" },
        { regex: /\bcerr\s*<<.*?;?/gm, description: "cerr << statements" }
    ],
    "cpp": [
        { regex: /\bprintf\(.*?\);?/gm, description: "printf() calls" },
        { regex: /\bstd::cout\s*<<.*?;?/gm, description: "std::cout << statements" },
        { regex: /\bstd::cerr\s*<<.*?;?/gm, description: "std::cerr << statements" },
        { regex: /\bstd::clog\s*<<.*?;?/gm, description: "std::clog << statements" }
    ],

    "ruby": [
        { regex: /\bputs\s+.*?/gm, description: "puts calls" },
        { regex: /\bprint\s+.*?/gm, description: "print calls" },
        { regex: /\bp\s+.*?/gm, description: "p calls" },
        { regex: /\bpp\s+.*?/gm, description: "pp calls" },
        { regex: /\bwarn\s+.*?/gm, description: "warn calls" },
        { regex: /logger\.(debug|info|warn|error|fatal)\(.*?\)/gm, description: "logger.* calls" }
    ],

    "go": [
        { regex: /\bfmt\.Print(ln|f)?\(.*?\)/gm, description: "fmt.Print*() calls" },
        { regex: /\blog\.Print(ln|f)?\(.*?\)/gm, description: "log.Print*() calls" },
        { regex: /\blogger\.(Print|Printf|Println|Fatal|Fatalf|Fatalln|Panic|Panicf|Panicln)\(.*?\)/gm, description: "logger.* calls" }
    ],

    "swift": [
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\bdebugPrint\(.*?\)/gm, description: "debugPrint() calls" },
        { regex: /\bNSLog\(.*?\)/gm, description: "NSLog() calls" },
        { regex: /\bos_log\(.*?\)/gm, description: "os_log() calls" }
    ],

    "rust": [
        { regex: /\bprintln!\(.*?\)/gm, description: "println!() macros" },
        { regex: /\bprint!\(.*?\)/gm, description: "print!() macros" },
        { regex: /\beprintln!\(.*?\)/gm, description: "eprintln!() macros" },
        { regex: /\beprint!\(.*?\)/gm, description: "eprint!() macros" },
        { regex: /\bdbg!\(.*?\)/gm, description: "dbg!() macros" }
    ],

    "kotlin": [
        { regex: /\bprintln\(.*?\)/gm, description: "println() calls" },
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\bLog\.(v|d|i|w|e)\(.*?\)/gm, description: "Log.*() calls (Android)" },
        { regex: /\btimber\.(v|d|i|w|e)\(.*?\)/gm, description: "timber.*() calls" }
    ],

    "dart": [
        { regex: /\bprint\(.*?\);?/gm, description: "print() calls" },
        { regex: /\bdebugPrint\(.*?\);?/gm, description: "debugPrint() calls" },
        { regex: /\blogger\.(v|d|i|w|e)\(.*?\);?/gm, description: "logger.*() calls" }
    ],

    "shellscript": [
        { regex: /\becho\s+.*?/gm, description: "echo commands" },
        { regex: /\bprintf\s+.*?/gm, description: "printf commands" },
        { regex: /#\s*DEBUG:.*$/gm, description: "DEBUG comments" }
    ],

    "powershell": [
        { regex: /\bWrite-Host\s+.*?/gm, description: "Write-Host commands" },
        { regex: /\bWrite-Output\s+.*?/gm, description: "Write-Output commands" },
        { regex: /\bWrite-Debug\s+.*?/gm, description: "Write-Debug commands" },
        { regex: /\bWrite-Warning\s+.*?/gm, description: "Write-Warning commands" },
        { regex: /\bWrite-Error\s+.*?/gm, description: "Write-Error commands" }
    ],

    "lua": [
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\bio\.write\(.*?\)/gm, description: "io.write() calls" }
    ],

    "perl": [
        { regex: /\bprint\s+.*?;?/gm, description: "print statements" },
        { regex: /\bsay\s+.*?;?/gm, description: "say statements" },
        { regex: /\bwarn\s+.*?;?/gm, description: "warn statements" },
        { regex: /\bcarp\s+.*?;?/gm, description: "carp statements" },
        { regex: /\bcluck\s+.*?;?/gm, description: "cluck statements" }
    ],
    "perl6": [
        { regex: /\bsay\s+.*?;?/gm, description: "say statements" },
        { regex: /\bprint\s+.*?;?/gm, description: "print statements" },
        { regex: /\bnote\s+.*?;?/gm, description: "note statements" },
        { regex: /\bwarn\s+.*?;?/gm, description: "warn statements" }
    ],

    "r": [
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\bcat\(.*?\)/gm, description: "cat() calls" },
        { regex: /\bmessage\(.*?\)/gm, description: "message() calls" },
        { regex: /\bwarning\(.*?\)/gm, description: "warning() calls" }
    ],

    "julia": [
        { regex: /\bprintln\(.*?\)/gm, description: "println() calls" },
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\b@info\s+.*?/gm, description: "@info macros" },
        { regex: /\b@warn\s+.*?/gm, description: "@warn macros" },
        { regex: /\b@error\s+.*?/gm, description: "@error macros" },
        { regex: /\b@debug\s+.*?/gm, description: "@debug macros" }
    ],

    "haskell": [
        { regex: /\bputStrLn\s+.*?/gm, description: "putStrLn calls" },
        { regex: /\bprint\s+.*?/gm, description: "print calls" }
    ],

    "scala": [
        { regex: /\bprintln\(.*?\)/gm, description: "println() calls" },
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\blogger\.(debug|info|warn|error)\(.*?\)/gm, description: "logger.* calls" }
    ],

    "groovy": [
        { regex: /\bprintln\(.*?\)/gm, description: "println() calls" },
        { regex: /\bprint\(.*?\)/gm, description: "print() calls" },
        { regex: /\blog\.(debug|info|warn|error)\(.*?\)/gm, description: "log.* calls" }
    ],

    "objective-c": [
        { regex: /\bNSLog\(.*?\);?/gm, description: "NSLog() calls" },
        { regex: /\bprintf\(.*?\);?/gm, description: "printf() calls" }
    ],
    "objective-cpp": [
        { regex: /\bNSLog\(.*?\);?/gm, description: "NSLog() calls" },
        { regex: /\bprintf\(.*?\);?/gm, description: "printf() calls" },
        { regex: /\bstd::cout\s*<<.*?;?/gm, description: "std::cout << statements" }
    ],

    "sql": [
        { regex: /\bPRINT\s+.*?;?/gm, description: "PRINT statements (SQL Server)" },
        { regex: /\bRAISE\s+(NOTICE|INFO|WARNING|EXCEPTION)\s+.*?;?/gm, description: "RAISE statements (PostgreSQL)" },
        { regex: /\bDBMS_OUTPUT\.PUT_LINE\(.*?\);?/gm, description: "DBMS_OUTPUT.PUT_LINE (Oracle)" }
    ],

    "matlab": [
        { regex: /\bdisp\(.*?\)/gm, description: "disp() calls" },
        { regex: /\bfprintf\(.*?\)/gm, description: "fprintf() calls" }
    ],

    "vb": [
        { regex: /\bDebug\.Print\s+.*?/gm, description: "Debug.Print statements" },
        { regex: /\bMsgBox\s+.*?/gm, description: "MsgBox calls" }
    ]
};

const SUPPORTED_LANGUAGES = Object.keys(LOG_PATTERNS);

export const LogsFilter: FilterRule = {
    name: "logs",
    languages: SUPPORTED_LANGUAGES,

    apply(code: string, ctx: FilterContext): string {
        const lang = ctx.language;
        const patterns = LOG_PATTERNS[lang];

        if (!patterns) {
            return code;
        }

        let result = code;

        // Aplicar todos los patrones para este lenguaje
        for (const pattern of patterns) {
            result = result.replace(pattern.regex, "");
        }

        return result;
    }
};