import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'home',
    loadChildren:()=> import('./module/home/home.module').then((m)=>m.HomeModule),
    canActivate: [AuthGuard] 
  },
  { path: '', redirectTo: 'login',pathMatch: 'full'  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
