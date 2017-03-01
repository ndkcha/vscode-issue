/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { UserComponent } from './user.component';

import { UserService } from './user.service';

import { UserRoutes } from './user.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        UserRoutes
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }