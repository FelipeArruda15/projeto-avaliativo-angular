import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCadastrarComponent } from './pg-cadastrar.component';

describe('PgCadastrarComponent', () => {
  let component: PgCadastrarComponent;
  let fixture: ComponentFixture<PgCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
