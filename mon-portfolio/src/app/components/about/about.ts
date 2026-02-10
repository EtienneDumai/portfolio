import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-about',
  standalone:true,
  imports: [CardModule,
    AvatarModule,
    ButtonModule,
    TagModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
