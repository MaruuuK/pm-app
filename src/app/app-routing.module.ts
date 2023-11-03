import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignupPageComponent },
    ],
  },
];
//   {
//     path: 'main',
//     component: MainComponent,
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
//   },
//   {
//     path: 'not-found',
//     component: ErrorPageComponent,
//   },
//   { path: '**', redirectTo: '/not-found' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
