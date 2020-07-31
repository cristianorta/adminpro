import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
   },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
