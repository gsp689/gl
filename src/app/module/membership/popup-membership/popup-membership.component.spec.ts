import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMembershipComponent } from './popup-membership.component';

describe('PopupMembershipComponent', () => {
  let component: PopupMembershipComponent;
  let fixture: ComponentFixture<PopupMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
