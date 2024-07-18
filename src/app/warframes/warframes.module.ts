import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeComponent } from './warframe/warframe.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [WarframeComponent, ListComponent],
  exports: [WarframeComponent, ListComponent],
  imports: [CommonModule],
})
export class WarframesModule {}
