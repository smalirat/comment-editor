import { BasePipeline } from './basePipeline';
import { Filter } from '../filters/filter';

export class FilterPipeline implements BasePipeline {

    private filters: Filter[] = [];

    addFilter(filter: Filter): FilterPipeline {
        this.filters.push(filter);
        return this;
    }

    apply(code: string): string {
        return this.filters.reduce(
            (prev, filter) => filter.apply(prev),
            code
        );
    }
}
