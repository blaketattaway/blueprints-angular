import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../interfaces/table';

@Component({
  selector: 'shared-column',
  templateUrl: './column.component.html',
  styles: [
  ]
})
export class ColumnComponent implements OnInit {

  @Input() column: Column | null = null;

  ngOnInit(): void {
    if ( this.column !== null && this.column.type === 'action' ) {
      
    }
  }

}
