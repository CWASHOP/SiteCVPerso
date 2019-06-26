import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competencechimie',
  templateUrl: './competencechimie.component.html',
  styleUrls: ['./competencechimie.component.scss']
})
export class CompetencechimieComponent implements OnInit {

  preparation= [

    {
      imageFront: "assets/image/poudre.jpg", 
      competences: "Synthèses de catalyseurs",
      bouton:"Savoir plus", 
      imageBack: "assets/image/poudre.jpg",
      description1: "Synthèse de catalyseur type oxyde (imprégnation, oxyde mixte, mésoporeux)",
      description2: "Synthèse de matériaux mésoporeux et mésostructurée (type SBA-15, KIT-6)",
    }
  ];

  technique= [

    {
      imageFront: "assets/image/xps.jpg", 
      competences: "Caractérisations",
      bouton:"Savoir plus", 
      imageBack: "assets/image/xps.jpg",
      description1: "Diffraction Rayon-X (bas-angle, haut-angle), RMN 1H (1D et 2D) et 13C, porosimetrie, Temperature Program Desorption (TPD), Temperature Program Reduction (TPR), Raman, Infra-Red (IR), Inelastic Neutron Spectroscopy (INS),X-ray photoelectron spectroscopy (XPS), Small Angle X- rays Scattering (SAXS), Microscopie (TEM, SEM), Inverse Gas Chromatography (IGC)",
    }
  ];

  process= [

    {
      imageFront: "assets/image/process.jpg", 
      competences: "Procédés Catalytiques",
      bouton:"Savoir plus", 
      imageBack: "assets/image/process.jpg",
      description1: "Analyse Chromatographique (GPC, HPLC)",
      description2: "Conception de procédé catalytique (phase liquide et phase gaz)",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
