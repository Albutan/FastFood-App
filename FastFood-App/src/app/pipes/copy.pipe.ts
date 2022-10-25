import { CopyService } from './../services/copy.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'copy'
})
export class CopyPipe implements PipeTransform {
  constructor(private copyService: CopyService){}

  transform(value: any): any {
    return this.copyService.getCopy(value) ? this.copyService.getCopy(value) : '';
  }

}
