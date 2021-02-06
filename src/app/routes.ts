import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { Routes } from "@angular/router";

export const routes: Routes = [ 
    {
        path : '',
        component : UsersComponent
    },
    {
        path : ':user',
        component : UserComponent
    }

]