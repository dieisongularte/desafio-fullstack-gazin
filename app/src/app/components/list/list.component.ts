import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { TableColumn } from './table-column';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent
{
  @Input() registers: Array<any> = [];
  @Input() columns: Array<TableColumn> = [];
  @Input() sortParams: Array<any> = [];
  @Input() itemsPerPage: number = 10;
  @Input() multiSortMeta: Array<any> = [];
  @Input() enablePagination: boolean = false;

  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  customSort(event: SortEvent): void
  {}
}
