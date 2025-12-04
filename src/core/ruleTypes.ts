export interface FilterContext {
    language: string;
    rules: string[];
}

export interface FilterRule {
    name: string;
    languages?: string[];
    apply(code: string, ctx: FilterContext): string;
}