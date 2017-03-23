import { PipeTransform, Pipe, NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {        
    return value ? Object.keys(value) : [];
  }
}


@NgModule({
	imports:[CommonModule],
	exports:[KeysPipe],
	declarations:[KeysPipe]
})
export class Utils{}