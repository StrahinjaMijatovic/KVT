import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGroupsComponent } from './all-groups.component';

describe('AllGroupsComponent', () => {
  let component: AllGroupsComponent;
  let fixture: ComponentFixture<AllGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllGroupsComponent]
    });
    fixture = TestBed.createComponent(AllGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
