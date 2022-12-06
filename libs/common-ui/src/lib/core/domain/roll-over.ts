import { Field } from "./field";

export interface RollOver {
  fields:Field[];
  formWidth?:string;
  store:string;
  name?: string;
  title?: string;
  gridHeight?:string;
  gridCol?: string;
  formType?:string;
  detailView?:boolean;
}
