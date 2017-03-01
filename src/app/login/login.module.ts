/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

import { LoginRoutes } from './login.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        LoginRoutes
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }