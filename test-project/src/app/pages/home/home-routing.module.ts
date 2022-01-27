import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MainComponent} from "./components/main/main.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {LoginComponent} from "../../core/auth/login/login.component";
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    component: MainComponent
  },{
    path:'landing-page',
    component: LandingPageComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent
  },{
    path: 'signup',
    loadChildren:() => import('../../core/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
