/**
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    }
];

export const UserRoutes = RouterModule.forChild(routes);