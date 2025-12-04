import * as assert from "assert";
import { CommandFacade } from "../../src/core/commandFacade";
import { FilterContext } from "../../src/core/ruleTypes";

suite("Commands Tests", () => {

    test("Remove comments", () => {
        const code = `
            // comment
            const x = 10; /* inline */
        `;

        const ctx: FilterContext = {
            language: "javascript",
            rules: ["comments"]
        };

        const result = CommandFacade.apply(code, ctx);

        assert.ok(!result.includes("// comment"), "Single-line comment not removed");
        assert.ok(!result.includes("/* inline */"), "Multi-line comment not removed");
    });

    test("Remove logs", () => {
        const code = `
            console.log("debug");
            const x = 5;
        `;

        const ctx: FilterContext = {
            language: "javascript",
            rules: ["logs"]
        };

        const result = CommandFacade.apply(code, ctx);

        assert.ok(!result.includes("console.log"), "Log not removed");
    });

    test("Run All Filters", () => {
        const code = `
            // comment
            console.log("debug");
            const x = 20;
        `;

        const ctx: FilterContext = {
            language: "javascript",
            rules: ["comments", "logs"]
        };

        const result = CommandFacade.apply(code, ctx);

        assert.ok(!result.includes("// comment"), "Comment not removed");
        assert.ok(!result.includes("console.log"), "Log not removed");
    });

});
