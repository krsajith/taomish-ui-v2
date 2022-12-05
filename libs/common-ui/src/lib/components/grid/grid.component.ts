import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GridCol } from './grid-model';

@Component({
  selector: 'tui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {

  @ViewChild('grid', { static: true })
  private grid!: ElementRef<HTMLDivElement>;

  @Input() data!:Record<string, unknown>[];
  @Input() cols!:GridCol[];

  @Input() stickyColFromStart=3
  @Input() stickyColFromLast=2

  ngOnInit(): void {
    this.grid.nativeElement.style
    .setProperty('--var-col-count', this.cols.length+'');
  }
}
