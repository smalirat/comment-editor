import { FilterGroup } from "../filters";

export function applyFilters(
    code: string,
    lang: string,
    filters: FilterGroup[]
): string {
    let result = code;

    for (const filter of filters) {
        for (const pattern of filter.patterns) {
            if (
                pattern.languages.includes("*") ||
                pattern.languages.includes(lang)
            ) {
                result = result.replace(pattern.regex, "");
            }
        }
    }

    return result
        .split('\n')
        .filter(line => line.trim() !== '' || line === '\r')
        .join('\n')
        .trim();
}