import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/ProjectService/project-service';
import { Project } from '../../data/data';
import { ProjectCard } from '../project-card/project-card';
import { CarouselModule } from "primeng/carousel";
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectCard,  CarouselModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  protected listProjet !: Project[];
  responsiveOptions: any[] | undefined;
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.listProjet = data;
      },
      error: (err) => {
        console.error(`Une erreur est survenue lors de la recupération des projets : ${err}`);
      }
    });
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
