import { comments } from "./comments";
import { logs } from "./logs";
import { emojis } from "./emojis";
import { TODOs } from "./TODOs";

export const ALL_FILTERS = [comments, logs, emojis, TODOs];

export interface FilterPattern {
    regex: RegExp;
    languages: string[];
}

export interface FilterGroup {
    id: string;
    patterns: FilterPattern[];
}
