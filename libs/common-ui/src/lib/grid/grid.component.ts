import { Component, Input } from '@angular/core';
import { GridCol } from './grid-model';

@Component({
  selector: 'tui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() data!:unknown[];
  @Input() cols!:GridCol[];
}
