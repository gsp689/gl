import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { GetMembershipComponent } from './get-membership/get-membership.component';
import { PopupMembershipComponent } from './popup-membership/popup-membership.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    GetMembershipComponent,
    PopupMembershipComponent
  ],
  imports: [
    CommonModule,MaterialModule,
    MembershipRoutingModule
  ],
  entryComponents:[PopupMembershipComponent] 
})
export class MembershipModule { }
