import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tui-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {

  @Input() progressBarList:any[]=[]
  @Output() progressIndex=new EventEmitter;

  constructor() { }

  tabClick(item:any,index:number) {
    let obj={
      currentItemName:item.name,
      previousItemName:index!==0?this.progressBarList[index-1].name:undefined,
      currentIndex:index
    }
    this.progressIndex.emit(obj);
  }

}
