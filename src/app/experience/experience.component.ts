import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  chooseResumeClicked: boolean;

  atos= [

  {
    imageFront: "assets/image/atos.jpg", 
    employeur: "ATOS",
    date: "2018-2019",
    bouton:"Projets", 
    imageBack: "assets/image/projetatos.jpg",
    description1: "Monter en compétence en développement FullStack orienté Java, suite à ma formation, en travaillant sur un projet interne à l'entreprise",
  }
];
  
uccs= [
  {
    imageFront1: "assets/image/universitelille.jpg", 
    employeur1: "Université de Lille",
    date1: "2013-2016",
    bouton1:"Projets", 
    imageBack1: "assets/image/projetuccs.jpg",
    description11: "Nouveau procédé catalytique pour la production d’hydrogène à partir de bioéthanol (ref:louise.duhamel@univ-lille1.fr)",
    description21: " Synthèse de nouveaux bio-template à partir de composés oléagineux pour la préparation de matériaux mésostructurés - Application en SILP catalyse (ref:franck.dumeignil@univ-lille.fr)"
  }, 
];

cardiff= [
  {
    imageFront2: "assets/image/cardiffuniversite.jpg", 
    employeur2: "Université de Cardiff",
    date2: "2011-2013",
    bouton2:"Projets", 
    imageBack2: "assets/image/cardiffprojet.jpg",
    description12: "Préparation de catalyseur mésoporeux pour la production de biodiesel à partir de triglycérides et d’acide gras (ref:karen.wilson2@rmit.edu.au)",
    description22: "Etude du processus de désactivation de HPA supporté sur silice concernant une réaction catalytique en phase gaz - Projet avec British Petroleum (ref:karen.wilson2@rmit.edu.au)"
  }, 
];

uccs1= [
  {
    imageFront3: "assets/image/universitelille.jpg", 
    employeur3: "Université de Cardiff",
    date3: "2011-2013",
    bouton3:"Projets", 
    imageBack3: "assets/image/these.jpg",
    description13: "Préparation de catalyseur mésoporeux pour la production de biodiesel à partir de triglycérides et d’acide gras (ref:karen.wilson2@rmit.edu.au)",
  }, 
];

  constructor() { }

  ngOnInit() {
  }

  showHideButtonsResume():void {
    this.chooseResumeClicked = !this.chooseResumeClicked;
  }

}
