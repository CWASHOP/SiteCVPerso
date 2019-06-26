import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savoir',
  templateUrl: './savoir.component.html',
  styleUrls: ['./savoir.component.scss']
})
export class SavoirComponent implements OnInit {

  collection= [
    {description: "Gestion de Projet"},
    {description: "Rédaction (rapport/projet)"},
    {description: "Développement web"},
    {description: "Travail en équipe"},
    {description: "Bon relationnel"},
    {description: "Esprit d'équipe"},
    {description: "Autonomie"},
    {description: "Rigueur"},
    {description: "Organisation"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
