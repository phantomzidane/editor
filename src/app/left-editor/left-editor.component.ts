import { Component, OnInit } from '@angular/core';
import {DragDropService} from '../drag-drop.service';
@Component({
  selector: 'app-left-editor',
  templateUrl: './left-editor.component.html',
  styleUrls: ['./left-editor.component.css']
})
export class LeftEditorComponent implements OnInit {
  public ComponentsBool=true;
  public nav=`<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`;
constructor(private data: DragDropService) {
   
}
  public componentIcon="keyboard_arrow_down";

  ngOnInit() {
    this.data.dropData={
      "name":'',
      "prop":`<nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
      </ul>
    </nav>`,
    "location":''
    }
  }
  showComponents(){
    this.ComponentsBool = !this.ComponentsBool;
    if(this.componentIcon=="keyboard_arrow_down"){
      this.componentIcon="keyboard_arrow_up"
    }
    else{
      this.componentIcon="keyboard_arrow_down"
    }
  }
  onDragOver(event){
    event.preventDefault();
    this.data.dropData['name']=event.target.innerHTML 
    console.log(event)  
  }
  
}
