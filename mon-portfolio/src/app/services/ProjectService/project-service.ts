import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project, Projects } from '../../data/data';
import { defer, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly http = inject(HttpClient);
  public getAllProjects() : Observable<Project[]> {
    // defer: recrée l'observable à chaque subscribe (utile si tu modifies le mock)
    return defer(() => of(Projects)).pipe(
      // optionnel: tri stable par date desc
      map(projects =>
        [...projects].sort((a, b) => b.date_debut.getTime() - a.date_debut.getTime())
      )
    );
  }
}
