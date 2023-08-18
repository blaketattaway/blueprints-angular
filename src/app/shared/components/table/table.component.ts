import { Component, Input, OnInit } from '@angular/core';
import { TableResult } from '../../interfaces/table';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<TData> implements OnInit {

  @Input() tableResult: TableResult<TData> | null = null;

  ngOnInit(): void {
  }  

  getValue(obj: TData, str: string): string {
    let value: string = `${obj[str as keyof TData]}`;
    return value || '';
  }
}
