import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(options: any[], searchValue: string): any[] {
    if(!options || !searchValue){
      return options;
    }
    return options.filter(option=>option.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  }
}
