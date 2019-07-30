import {AfterViewInit, Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-arrow-down',
  animations: [
    trigger('move', [
      state('in', style({transform: 'translateY(0)'})),
      state('out', style({transform: 'translateY(30%)'})),
      transition('in => out', animate('2s ease-in-out')),
      transition('out => in', animate('2s ease-in-out'))
    ]),
  ],
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.scss']
})
export class ArrowDownComponent implements AfterViewInit {
  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}
