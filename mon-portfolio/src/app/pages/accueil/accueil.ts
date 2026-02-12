import { Component } from '@angular/core';
import { About } from "../../components/about/about";
import { ProjectComponent } from '../../components/project/project';

@Component({
  selector: 'app-accueil',
  standalone:true,
  imports: [About, ProjectComponent],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

}
