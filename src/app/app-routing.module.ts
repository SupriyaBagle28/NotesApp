import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'new', component:NewNoteComponent},
  {path:'edit',component:EditComponent},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
