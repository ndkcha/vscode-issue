/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    }, {
        path: '**',
        redirectTo: 'login'
    }
];

export const AppRoutes = RouterModule.forRoot(routes, {
    useHash: true
});