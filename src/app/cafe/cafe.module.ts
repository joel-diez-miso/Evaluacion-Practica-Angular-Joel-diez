import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@NgModule({
  imports: [CommonModule, CafeListComponent],
  exports: [CafeListComponent],
})
export class CafeModule {}
