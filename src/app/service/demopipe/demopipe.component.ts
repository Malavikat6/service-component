import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="kerala";
today=Date();
user={
  id:100,
  name:"Innunni",
  DOB:'06-02-2021',
  salary:50000
}
}
