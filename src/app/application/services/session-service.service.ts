import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private expirationTime: number = Number(localStorage.getItem('expirationTime'));
  public timeLeft: number = 0;
  public formattedTimer: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public startTime(): void {
    setInterval(() => {
      this.timeLeft = this.calculateTimeleft();
      this.formattedTimer.next(this.formatTime(this.timeLeft));
    }, 1000);
  }

  private calculateTimeleft(): number {
    const now = Math.floor(Date.now() / 1000);

    return Math.max(0, this.expirationTime - now);
  }

  public formatTime(timestamp: number): string {
    const hours = Math.floor(timestamp / 3600);
    const minutes = Math.floor((timestamp % 3600) / 60);
    const seconds = Math.floor(timestamp % 60);

    const paddedhours = hours > 0 ? `0${hours}:` : '';
    const paddedMinutes = minutes ;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${paddedhours}${paddedMinutes}:${paddedSeconds}`;
  }
}