import { Component } from '@angular/core';

@Component({
  selector: 'app-warframes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public warframeNames: string[] = ['Nova', 'Harrow', 'Gauss', 'Titania'];
  public deletedWarframe?: string = '';

  removeLastWarframe(): void {
    this.deletedWarframe = this.warframeNames.pop();
  }
}
