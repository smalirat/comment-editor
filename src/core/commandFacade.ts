import { ALL_RULES } from "./filters";
import { FilterContext } from "./ruleTypes";

export class CommandFacade {
    static apply(code: string, ctx: FilterContext): string {
        let result = code;

        for (const rule of ALL_RULES) {

            if (!ctx.rules.includes(rule.name))
                continue;

            if (rule.languages && !rule.languages.includes(ctx.language))
                continue;

            result = rule.apply(result, ctx);
        }

        return result;
    }
}