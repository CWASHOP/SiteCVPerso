import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ExperienceComponent } from './experience/experience.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationComponent } from './formation/formation.component';
import { LoisirComponent } from './loisir/loisir.component';
import { HomeComponent } from './home/home.component';
import { CompetencechimieComponent } from './competencechimie/competencechimie.component';
import { CompetencewebComponent } from './competenceweb/competenceweb.component';
import { LangueComponent } from './langue/langue.component';
import { SavoirComponent } from './savoir/savoir.component';

const routes: Routes = [
      

  { path: '', component:  HomeComponent },
  { path: 'experience', component:  ExperienceComponent },
  { path: 'competences', component:  CompetencesComponent },
  { path: 'competencechimie', component:  CompetencechimieComponent },
  { path: 'competenceweb', component:  CompetencewebComponent },
  { path: 'langue', component:  LangueComponent },
  { path: 'savoir', component:  SavoirComponent },
  { path: 'formation', component:  FormationComponent },
  { path: 'loisir', component:  LoisirComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


