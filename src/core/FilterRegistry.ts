import { FilterPipeline } from './pipelines/filterPipeline';
import { CommentFilter } from './filters/commentFilter';
import { defaultCommentRules } from './filters/commentRules';

class FilterRegistry {

    private pipelines: Map<string, FilterPipeline> = new Map();

    constructor() {
        Object.keys(defaultCommentRules).forEach(languageId => {

            const ruleSet = defaultCommentRules[languageId];

            const pipeline = new FilterPipeline()
                .addFilter(new CommentFilter(ruleSet));

            this.pipelines.set(languageId, pipeline);
        });
    }

    getPipeline(languageId: string) {
        return this.pipelines.get(languageId);
    }
}

export const filterRegistry = new FilterRegistry();
