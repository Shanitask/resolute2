import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

 
  { path: '', redirectTo: 'User_Interface', pathMatch: 'full' },
  {
    path: 'User_Interface',
    loadChildren: () => import('./user-interface/user-interface.module').then(m => m.UserInterfaceModule)
  }
   
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
