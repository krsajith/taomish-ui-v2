import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseControlComponent } from '../../base-control/base-control.component';
import { Constant } from '../../domain/constant';

@Component({
  selector: 'tui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends BaseControlComponent implements OnInit {

  @Input() inputType:any = Constant.NUMBER;
  @Input() placeholder:any=''

  parent = new FormGroup({
    text: new FormControl('')
  })

  const=Constant;

  constructor(){
    super();
  }

  ngOnInit(): void {
    this.text.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(resp=>{
      this.onChange(resp);
    })
  }

  get text():FormControl{
    return this.parent.get('text') as FormControl;
  }


  writeValue(obj: any): void {
    this.text.patchValue("")
    if(obj){
      this.parent.patchValue(obj)
    }
  }

}
