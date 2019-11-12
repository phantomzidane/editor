import { Injectable } from '@angular/core';
import {moveItemInArray,CdkDragDrop,transferArrayItem} from '@angular/cdk/drag-drop';
@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor() { }
  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}
}
