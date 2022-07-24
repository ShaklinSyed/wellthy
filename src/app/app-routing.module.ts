import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IFrameComponent } from './i-frame/i-frame.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'wellthypage',
    component: IFrameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
