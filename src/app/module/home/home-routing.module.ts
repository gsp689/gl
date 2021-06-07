import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'general-ledger-balance',
        loadChildren: () =>
          import('../project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'sub-ledger-balance',
        loadChildren: () =>
          import('../membership/membership.module').then(
            (m) => m.MembershipModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
