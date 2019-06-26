import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loisir',
  templateUrl: './loisir.component.html',
  styleUrls: ['./loisir.component.scss']
})
export class LoisirComponent implements OnInit {

  collection= [
    {description: "Lecture"},
    {description: "Voyage"},
    {description: "Geeking"},
    {description: "Information"},
    {description: "Sport"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
