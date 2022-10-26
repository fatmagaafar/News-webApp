import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subTitle'
})
export class SubTitlePipe implements PipeTransform {

  transform(title:string,lenght:number): string
   {
    return title.substr(0,lenght) +"..."
  }

}
