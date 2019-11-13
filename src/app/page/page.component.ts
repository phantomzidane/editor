import { Component, OnInit} from '@angular/core';
import{ DragDropService } from '../drag-drop.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  
  public updatedData: string;
  constructor(private data: DragDropService) {
   
   }
   
  ngOnInit() {
    
  }
  test(event){
    let testFrame = document.querySelector('#testFrame');
    var iWindow = (<HTMLIFrameElement> testFrame).contentWindow;
    console.log(iWindow.document)
  }
  drop(event){
    //egww
    let testFrame = document.querySelector('#testFrame');
    var iWindow = (<HTMLIFrameElement> testFrame).contentWindow;
    console.log(iWindow.document);
     testFrame

    event.target.classList.add('str');
    this.data.dropData['location']='str'
    let ele = document.querySelector('#mainFrame')
    
    let place= document.querySelector(`.${this.data.dropData['location']}`)
    
    event.preventDefault();
  
    let textnode = this.data.dropData['prop'];

    place.innerHTML= place.innerHTML + textnode
    // ele.innerHTML= ele.innerHTML + textnode
  }
  onDragOver(event){
    event.preventDefault();
    event.target.style.border="1px solid #428bca"
   
  }
  onDragLeave(event){
    event.target.style.border="none"
  }
} 
      


