import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  collection= [
    {image: "assets/image/GL.jpg", titre: "Lecture", date: "2018 (3 mois)", description:"Formation développeur Java" },
    {image: "assets/image/logouniversitelille1.jpg", date: " 2007-2010 ", description:"Doctorat de chimie" },
    {image: "assets/image/logouniversitelille1.jpg", date: "2003-2007 ", description:"Master en science de la matière" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
