import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit
{

  constructor() { }

  ngOnInit(): void {
  }
  title="gadgeon"
    ck(){
    // alert("hi com1")
    const service= new myservice;
      service.onclickbtn(this.title);
   }
  // onclickbtn()
  // {
  //   const service= new myservice;
  // }

}
