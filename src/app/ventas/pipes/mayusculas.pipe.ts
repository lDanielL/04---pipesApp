import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusuculasPipe implements PipeTransform{

    transform(value:string, enMayusculas:boolean = true):string {
        
        return (enMayusculas)? value.toUpperCase(): value.toLowerCase();
    
    }


}