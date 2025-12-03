import { Filter } from './filter';
import { CommentRules } from './commentRules';

export class CommentFilter implements Filter {

    constructor(private rules: CommentRules) {}

    apply(code: string): string {
        let result = code;

        if (this.rules.multiLine) {
            result = result.replace(this.rules.multiLine, '');
        }

        if (this.rules.singleLine) {
            result = result.replace(this.rules.singleLine, '');
        }

        return result;
    }
}
