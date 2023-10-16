import { Pipe, PipeTransform } from '@angular/core';
import { User, planCategory } from './registration-creation';

@Pipe({
  name: 'planCategory'
})
export class PlanCategoryPipe implements PipeTransform {

  transform(user:User[], planCategory:any) 
  { 
    if(planCategory=='default')
    return user
    else
    return user.filter((user)=>user.planCategory==planCategory)
  }


}
