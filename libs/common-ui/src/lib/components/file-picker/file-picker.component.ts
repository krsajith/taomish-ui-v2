import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { BaseControlComponent } from '../../core/base-control/base-control.component';

@Component({
  selector: 'taomish-ui-v2-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>FilePickerComponent),
    multi:true
  }]
})
export class FilePickerComponent extends BaseControlComponent{

  @Input() path:any;
  @Input() type:any;
  @Output() fileResp=new EventEmitter;

  fileArr:any[]=[]
  fileSelected=true
  constructor(private apiservice: ApiService){
    super();
  }

  onfileupload(value:any) {
    const _this = this;
    const files = value['target']['files'];
    if(this.type=='mt940'){
      this.mt940uploader(files)
    }else{
      const formData = new FormData();
      let arr:any[]=Object.values(files)
      arr.forEach(data => {
        formData.append('files', data);
      })
      this.fileUploader(formData)
      this.fileSelected = false;
    }
  }

  mt940uploader(files:any){
    let fileDecryptData:{fileName:string,filleSize:string,data:any}[]=[]
    for(let file of files){
      if(file.type=="text/plain"){
        this.apiservice.post(this.path,file).subscribe(data=>{
          fileDecryptData.push({fileName:file.name,filleSize:file.size,data:data});
        })
      }
    }
    this.fileResp.emit(fileDecryptData);
  }

  fileUploader(formData:any){
    this.apiservice.post(this.path,formData).subscribe((data:any) => {
      this.fileArr.push.apply(this.fileArr,data)
      this.onChange(this.fileArr);
    });
  }

  writeValue(obj: any): void {
    this.fileArr=[]
    if(obj && obj!==null && obj.length>0){
      this.fileSelected=false;
      this.fileArr=obj
    }
  }
}
