import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/ProjectService/project-service';
import { Project } from '../../data/data';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  protected listProjet !: Project[];
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.listProjet = data;
      },
      error: (err) => {
        console.error(`Une erreur est survenue lors de la recupération des projets : ${err}`);
      }
    })
  }
}
