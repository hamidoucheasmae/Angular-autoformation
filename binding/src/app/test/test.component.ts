import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div> welcome {{name}}</div>
  <h2> {{2+2}}</h2>
  <h2> {{"welcome "+name}}</h2>
  <h2>{{name.length}} </h2>
  <h2>{{name.toUpperCase()}} </h2>
  <h2>{{greetUser()}} </h2>
  <h2>{{siteUrl}} </h2>
  <input [id]="myId" type="text" value="mid"> 
  <input [disabled]="true" id="{{myId}}" type="text" value="mid"> 
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="mind"> 
  
  `,
 styles:[]
})
export class TestComponent implements OnInit {
 public siteUrl =window.location.href;
  public name= "asmae ham";
  public isDisabled =true;
  public myId ="testId";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "HELLO " + this.name;
  }

}
