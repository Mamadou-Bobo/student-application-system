import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  // transform(data: Object) {
  //   const keys = Object.keys(data);
  //   return keys.slice(keys.length / 2);
  // }

  transform(data: any) {
    const size = Object.keys(data).length / 2;

    const object: {value: string, name: string}[] = [];

    for(let i = 0; i < size; i++) {
      if(data[i].includes("_")) {
        object.push({value: data[i], name: data[i].replace(/_/g," ")});
      } else {
        object.push({value: data[i], name: data[i]});
      }
    }

    return object;
  }

}