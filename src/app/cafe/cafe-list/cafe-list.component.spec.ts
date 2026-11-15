import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { CafeListComponent } from './cafe-list.component';

describe('CafeListComponent', () => {
  let fixture: ComponentFixture<CafeListComponent>;
  let component: CafeListComponent;

  const cafes: Cafe[] = [
    new Cafe(1, 'Café Uno', 'Blend', 'Región Uno', 'Dulce', 1800, 'uno.jpg'),
    new Cafe(2, 'Café Dos', 'Café de Origen', 'Región Dos', 'Cítrico', 1700, 'dos.jpg'),
    new Cafe(3, 'Café Tres', 'Blend', 'Región Tres', 'Cacao', 1600, 'tres.jpg'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeListComponent],
      providers: [{ provide: CafeService, useValue: { getCafes: () => of(cafes) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with 3 rows plus the header', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('tbody tr').length).toBe(3);
    expect(el.querySelectorAll('thead tr').length).toBe(1);
    expect(el.querySelectorAll('tr').length).toBe(4);
  });

  it('should count coffees by type', () => {
    expect(component.totalBlend).toBe(2);
    expect(component.totalOrigen).toBe(1);
  });
});
