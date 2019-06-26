import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompetencewebComponent } from '../competenceweb/competenceweb.component';


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent  {

  chooseCompchiClicked: boolean;
  chooseCompWebClicked: boolean;
  chooseLanguesClicked: boolean;
  chooseResumeClicked: boolean;
  chooseSavoirClicked: boolean;

  constructor() {}
   
   showHideButtonsCompetencechimie(): void {
    this.chooseCompchiClicked = !this.chooseCompchiClicked;
    this.chooseCompWebClicked = false;
    this.chooseLanguesClicked = false;
    this.chooseSavoirClicked  = false;
   }

   showHideButtonsCompetenceweb():void {
      this.chooseCompWebClicked = !this.chooseCompWebClicked;
      this.chooseCompchiClicked =false;
      this.chooseLanguesClicked = false;
      this.chooseSavoirClicked  = false;
    }

    showHideButtonsLangues():void {
      this.chooseLanguesClicked = !this.chooseLanguesClicked;
      this.chooseCompWebClicked = false;
      this.chooseCompchiClicked =false;
      this.chooseSavoirClicked  = false;
    }

    showHideButtonsSavoir():void {
      this.chooseSavoirClicked = !this.chooseSavoirClicked;
      this.chooseCompWebClicked = false;
      this.chooseCompchiClicked =false;
      this.chooseLanguesClicked = false;
    }

    showHideButtonsResume():void {
      this.chooseResumeClicked = !this.chooseResumeClicked;
    }
   



}
