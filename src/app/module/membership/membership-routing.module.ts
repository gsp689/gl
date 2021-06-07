import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetMembershipComponent } from './get-membership/get-membership.component';

const routes: Routes = [{ path: '', component: GetMembershipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipRoutingModule {}
