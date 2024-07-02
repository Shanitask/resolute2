import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserlistComponent } from './adduserlist/adduserlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    UserlistComponent,
    AdduserlistComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserInterfaceModule { }
