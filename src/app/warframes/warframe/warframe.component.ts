import { Component } from '@angular/core';

@Component({
  selector: 'app-warframes-warframe',
  templateUrl: './warframe.component.html',
  styleUrl: './warframe.component.css',
})
export class WarframeComponent {
  public name: string = 'nova';
  public age: number = 124445;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getWarframeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'harrow';
  }

  changeAge(): void {
    this.age = 7777777777776;
  }

  resetWarframe(): void {
    this.name = 'nova';
    this.age = 124445;
  }
}
