import { Pipe, PipeTransform } from "@angular/core";
import state from '../../../shared/utils/states';

@Pipe({
  name: 'getState'
})
export class GetStatePipe implements PipeTransform{

  constructor() {

  }
  transform(value: any, ...args: any[]) {
    const st = state.find(s => +s.value === +value);
    return st.title;
  }
}
