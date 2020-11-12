import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { TimerstuffService } from '../timerstuff.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private timerStuff: TimerstuffService) {  }

  timers: Array<Observable<number>>;
  
  ngOnInit(): void {
    this.addTimer();
  }

  addTimer(): void {
    this.timerStuff.startTimer(1, 1000, 1000);
    this.timers.push(this.timerStuff.getTimers()[this.timers.length > 0 ? this.timers.length-1 : 0]);
  }

}
