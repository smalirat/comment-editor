export interface BasePipeline {
    apply(code: string): string;
}