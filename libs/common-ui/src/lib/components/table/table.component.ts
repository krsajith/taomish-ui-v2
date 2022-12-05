import { Component, Input } from '@angular/core';

@Component({
  selector: 'tui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headerList:any[]=[]
  @Input() data :any[]=[]
  @Input() stickyColStart:number[]=[]

}
