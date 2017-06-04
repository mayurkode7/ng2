import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:"filter"
})

export class FilterPipe implements PipeTransform{

    transform(values:any, query:any):any{

        if(query === undefined) return values; // if user has not entered any query then 
                                              //  return the whole set of values

        return values.filter(function(value){

             return value.toLowerCase().includes(query.toLowerCase());

        });

    }

}