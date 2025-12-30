import { FilterGroup } from "./index";

export const emojis: FilterGroup = {
    id: "emojis",
    patterns: [
        {
            regex: /\p{Emoji_Presentation}/gu,
            languages: ["*"]
        },
        {
            regex: /(\u00a9|\u00ae|[\u2000-\u3300])/gu,
            languages: ["*"]
        }
    ]
};