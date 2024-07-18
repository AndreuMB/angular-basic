import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Level: {{ counter }}</h3>
    <button (click)="updateCounter(-1)">-1</button>
    <button (click)="resetCounter(1)">Reset</button>
    <button (click)="updateCounter(1)">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 1;

  updateCounter(increaseNum: number): void {
    this.counter += increaseNum;
  }

  resetCounter(value: number): void {
    this.counter = value;
  }
}
