import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  imports: [CommonModule],
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css',
})
export class CafeListComponent implements OnInit {
  private readonly cafeService = inject(CafeService);

  cafes: Cafe[] = [];
  totalOrigen = 0;
  totalBlend = 0;

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.contarPorTipo();
    });
  }

  private contarPorTipo(): void {
    this.totalOrigen = this.cafes.filter((c) => c.tipo === 'Café de Origen').length;
    this.totalBlend = this.cafes.filter((c) => c.tipo === 'Blend').length;
  }
}
