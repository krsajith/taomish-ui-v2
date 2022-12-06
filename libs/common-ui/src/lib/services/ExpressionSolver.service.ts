import { Injectable } from '@angular/core';
import * as jexl0 from "jexl";

@Injectable({
  providedIn: 'root'
})
export class ExpressionSolverService {
  private scope:{ [key:string]:{} } = {};
  private expression = '';
  private jexl:any;
  constructor() {
  }

  public setExpression(expression:string) {
    this.expression = expression;
    this.useJexl();
    return this;
  }

  private useJexl() {
    this.jexl = jexl0;
    return this;
  }

  public addContext(key:string,context:object) {
    this.scope[key] = context;
    return this;
  }

  public solve() {
    return this.jexl.evalSync(this.expression,this.scope);
  }
}
