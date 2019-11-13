import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DragDropService {
public data: {};
  constructor() { 
    
  }
  get dropData(): object {
    return this.data;
  }
  set dropData(value: object){
     this.data=value;
  }
   
}
