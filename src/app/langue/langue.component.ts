import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss']
})
export class LangueComponent implements OnInit {

  collection= [
    {image: "assets/image/france.jpg", niveau:"Langue Maternelle" },
    {image: "assets/image/UK.jpg", niveau:"Lu / Ecrit / Parlé" },
    {image: "assets/image/espagne.jpg", niveau:"Lu" },
    {image: "assets/image/portugal.jpg", niveau:"Notions" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
