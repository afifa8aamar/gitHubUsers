import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { Routes } from "@angular/router";

export const routes: Routes = [ 
    {
        path : '',
        component : UsersComponent
    },
    {
        path : 'not-found',
        component : NotFoundComponent
    },
    {
        path : ':user',
        component : UserComponent
    }

]