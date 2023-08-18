export interface TableResult<TData> {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    collection: TData[];
    columns: Column[];
    noInfoText: string;
}

export interface Column {
    name: string;
    key: string;
    type: ColumnType;
    action?: () => {};
}

export type ColumnType = '' | 'action' | 'actions' | 'button';