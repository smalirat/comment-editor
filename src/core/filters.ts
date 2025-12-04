import { CommentsFilter } from "./rules/commentsFilter";
import { LogsFilter } from "./rules/logsFilter";
import { FilterRule } from "./ruleTypes";

export const ALL_RULES: FilterRule[] = [
    CommentsFilter,
    LogsFilter
];