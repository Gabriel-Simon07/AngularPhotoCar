import { SignInComponent } from './home/signin/signin.component';
import { FotoListResolver } from './fotos/foto-list/foto-list.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotoListComponent } from './fotos/foto-list/foto-list.component';
import { FotoFormComponent } from './fotos/foto-form/foto-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'user/:userName', component: FotoListComponent, resolve: {fotos: FotoListResolver} },
  { path: 'f/add', component: FotoFormComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
