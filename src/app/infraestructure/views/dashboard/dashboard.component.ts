import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SessionServiceService } from '../../../application/services/session-service.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  timer: string = '00:00:00';

  constructor(
    private sessionService: SessionServiceService  
  ) {
    this.sessionService.startTime();
    this.sessionService.formattedTimer.subscribe(timer => this.timer = timer);
  }
  closeSession(): void{
    this.sessionService.closeSession();
  }
}
