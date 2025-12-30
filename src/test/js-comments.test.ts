import * as assert from "assert";
import { applyFilters } from "../engine/filterEngine";
import { comments } from "../filters/comments";

suite("Comments filter – equivalence classes", () => {
    test("removes C-style single-line comments (//)", () => {
        const input = `const a = 1; // comment
                       const b = 2;`;

        const output = applyFilters(input, "javascript", [comments]);

        assert.ok(!output.includes("// comment"));
        assert.ok(output.includes("const a = 1;"));
        assert.ok(output.includes("const b = 2;"));
    });

    test("removes C-style multi-line comments (/* */)", () => {
        const input = `body {
                                /* multi
                                line
                                comment */
                                color: red;
                            }`;

        const output = applyFilters(input, "css", [comments]);

        assert.ok(!output.includes("multi"));
        assert.ok(output.includes("color: red;"));
    });

    test("removes hash (#) comments", () => {
        const input = `x = 1  # comment
                       y = 2`;

        const output = applyFilters(input, "python", [comments]);

        assert.ok(!output.includes("# comment"));
        assert.ok(output.includes("x = 1"));
        assert.ok(output.includes("y = 2"));
    });

    test("removes HTML/XML comments", () => {
        const input = `<div>
                        <!-- comment -->
                        <span>text</span>
                       </div>`;

        const output = applyFilters(input, "html", [comments]);

        assert.ok(!output.includes("<!--"));
        assert.ok(output.includes("<span>text</span>"));
    });


    test("removes SQL single-line comments (--)", () => {
        const input = `SELECT * FROM users; -- comment
                       SELECT 1;`;

        const output = applyFilters(input, "sql", [comments]);

        assert.ok(!output.includes("-- comment"));
        assert.ok(output.includes("SELECT * FROM users;"));
        assert.ok(output.includes("SELECT 1;"));
    });

    test("removes Lua block comments (--[[ ]])", () => {
        const input = `--[[block comment]]
                         print("hello")`;

        const output = applyFilters(input, "lua", [comments]);

        assert.ok(!output.includes("block comment"));
        assert.ok(output.includes('print("hello")'));
    });

    test("removes TeX comments (%)", () => {
        const input = `\\section{Title} % comment
                        Text here`;

        const output = applyFilters(input, "tex", [comments]);

        assert.ok(!output.includes("% comment"));
        assert.ok(output.includes("\\section{Title}"));
        assert.ok(output.includes("Text here"));
    });

    test("does not modify code with no comments", () => {
        const input = `const x = 42;`;
        const output = applyFilters(input, "javascript", [comments]);

        assert.strictEqual(output.trim(), input);
    });

});
