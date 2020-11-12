import { Injectable } from '@angular/core';
import { timer, interval, Observable, Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerstuffService {

  // timer1: Observabl
  constructor() { }

  timer1Val: number;
  
  private timerSubscriptions: Array<Subscription>;
  private timers: Array<Observable<number>>;
  private timer1Subscription: Subscription;

  startTimer(timerIndex: number, msInitial: number, msNext: number): void {

    this.timers.push(timer(msInitial, msNext));
    //const timer1 = timer(msInitial, msNext);
    this.timerSubscriptions.push(this.timers[this.timers.length-1].subscribe(val => this.timer1Val = val));
  }

  getTimers(): Observable<number>[] {

    return this.timers;
  }
}
