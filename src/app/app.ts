import { Component } from '@angular/core';
import { CafeModule } from './cafe/cafe.module';

@Component({
  imports: [CafeModule],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
