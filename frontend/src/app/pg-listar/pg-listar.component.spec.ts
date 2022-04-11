import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgListarComponent } from './pg-listar.component';

describe('PgListarComponent', () => {
  let component: PgListarComponent;
  let fixture: ComponentFixture<PgListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
