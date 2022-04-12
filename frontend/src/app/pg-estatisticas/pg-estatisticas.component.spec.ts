import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEstatisticasComponent } from './pg-estatisticas.component';

describe('PgEstatisticasComponent', () => {
  let component: PgEstatisticasComponent;
  let fixture: ComponentFixture<PgEstatisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgEstatisticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgEstatisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
