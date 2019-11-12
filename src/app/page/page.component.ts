import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public data: string;
  constructor() {
   
   }
   
  ngOnInit() {
   
  
  }
  
 test(event){
   
    let frame = document.querySelector('#frame');
       let tt=frame.contentWindow.document.querySelector('html');
       this.data= tt
       tt.addEventListener('click',function(e){
         e.target.style.color="red"
       })
   console.log(tt)
   console.log(this.data)
 }
 drop(event){
  console.log(event)
 }

}
