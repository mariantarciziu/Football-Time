export class Pagination<T> {
    public items: Array<T>;
    public totalPages: number;
    public totalNumber: number;
    public currentPage: number;
    public pageSize: number;
}
