import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainBoardsPageComponent } from './pages/main-boards-page/main-boards-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: WelcomePageComponent,
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    canActivate: [AuthGuard],
    component: SignupPageComponent,
  },
  {
    path: 'main',
    component: MainBoardsPageComponent,
    //     children: [
    //       { path: '', component: MainContentComponent },
    //       {
    //         path: 'createBoards',
    //         component: CreateBoardsComponent,
    //         redirectTo: 'main',
    //       },
    //       {
    //         path: 'editProfile',
    //         component: EditProfileComponent,
    //       },
    //       {
    //         path: 'board/:title',
    //         component: BoardComponent,
    //       },
    //     ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
