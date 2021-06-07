import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMembershipComponent } from './get-membership.component';

describe('GetMembershipComponent', () => {
  let component: GetMembershipComponent;
  let fixture: ComponentFixture<GetMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
