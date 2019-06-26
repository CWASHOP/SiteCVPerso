import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-competenceweb',
  templateUrl: './competenceweb.component.html',
  styleUrls: ['./competenceweb.component.scss']
})
export class CompetencewebComponent  {

  
 constructor(config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.height = '10px';

   }

}
