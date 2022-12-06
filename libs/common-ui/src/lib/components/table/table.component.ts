import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit{

  @Input() headerList:any[]=[]
  @Input() data :any[]=[]
  @Input() stickyColStart:number[]=[]

  @ViewChild('grid', { static: true })
  private grid!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.grid.nativeElement.style
    .setProperty('--var-col-count', this.headerList.length+'');
  }
}
