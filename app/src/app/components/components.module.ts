import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header.component';
import { TextInputComponent } from './input/text-input/text-input.component';
import { InputErrorComponent } from './input/input-error/input-error.component';
import { DateInputComponent } from './input/date-input/date-input.component';
import { TableFilterComponent } from './table/filter/table-filter.component';
import { NotificationComponent } from './common/notification/notification.component';
import { EmptyTableComponent } from './table/empty-table/empty-table.component';
import { TableComponent } from './table/table/table.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    TextInputComponent,
    InputErrorComponent,
    DateInputComponent,
    TableFilterComponent,
    NotificationComponent,
    EmptyTableComponent,
    TableComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
