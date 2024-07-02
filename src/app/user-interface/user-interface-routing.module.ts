import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserlistComponent } from './adduserlist/adduserlist.component';

const routes: Routes = [
  {
    path:"User",component:UserlistComponent
  },
  {
    path:"",redirectTo:"User",pathMatch:"full"
  },
  {
    path:"Add_User",component:AdduserlistComponent
  },
  { path: "update-user/:id", component: AdduserlistComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
