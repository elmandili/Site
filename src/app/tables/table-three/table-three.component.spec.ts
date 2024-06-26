import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableThreeComponent } from './table-three.component';

describe('TableThreeComponent', () => {
  let component: TableThreeComponent;
  let fixture: ComponentFixture<TableThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
