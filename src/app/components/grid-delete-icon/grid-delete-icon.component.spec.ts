import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDeleteIconComponent } from './grid-delete-icon.component';

describe('GridDeleteIconComponent', () => {
  let component: GridDeleteIconComponent;
  let fixture: ComponentFixture<GridDeleteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDeleteIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDeleteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
