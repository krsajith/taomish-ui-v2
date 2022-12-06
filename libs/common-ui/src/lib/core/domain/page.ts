import { Field } from "./field";
import { ListEntity } from "./listentity";
import { MenuBar } from "./menubar";
import { Popover } from "./popover";
import { ContextMenuDetails } from "./context-menu-details";

export interface Page {
  fields: Field[];
  formWidth?:string;
  store:string;
  parentStore?:string;
  name?: string;
  title?: string;
  description?: string;
  url?: string;
  gridCol?: string;
  pageIconUrl?:string;
  tablelist?: ListEntity[];
  menuBarList:MenuBar[];
  formType?:string;
  detailView?:boolean;
  tableType?:string;
  nestedTablelist?:ListEntity[];
  nestedFieldName?:string;
  progressBar?:string[];
  parentField?:string;
  gridHeight?:string;
  parentPageName?:string;
  popoverList?:Popover[];
  contextMenuDetails?:ContextMenuDetails; // context menu
  multistoreField?:Field[]; // Capturing multi formdata in one form
  dividerWidth?:string;
  approvalFieldRelation?:{fieldName:string,stepActionName:string}[]; // Relation between
  formButton?:{label:string,response:string,isView:boolean;disabled:boolean}[]; // form buttons
  toggleButton?:{label:string,value:string,filterName?:string,referenceField?:string}[]; // Toggle Button dto
  preLoadFunction?:string;
  tableActionView?:boolean;
  parentBackRoute?:string;
  validtionUrl?:string; // This url use for check validation
  errorMessage?:string;
}

