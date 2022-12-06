export class Validation{
  required?:boolean;
  maxLength?:number;
  minLength?:number;
  min?:number;
  max?:number;
  isViewStript?:boolean;
  customValidator?:{functionKey:string,url?:string}[];
}
