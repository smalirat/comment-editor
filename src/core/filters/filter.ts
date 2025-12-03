export interface Filter {
    apply(code: string): string;
}