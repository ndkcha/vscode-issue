/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const LoginRoutes = RouterModule.forChild(routes);