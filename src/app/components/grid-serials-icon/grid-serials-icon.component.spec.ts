import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSerialsIconComponent } from './grid-serials-icon.component';

describe('GridSerialsIconComponent', () => {
  let component: GridSerialsIconComponent;
  let fixture: ComponentFixture<GridSerialsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSerialsIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSerialsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
