import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { ProjetComponent } from './projet/projet.component';
import { NouveauProjetComponent } from './nouveau-projet/nouveau-projet.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    { path: 'projet-detail/:id', component: ProjetDetailComponent
    },
    
    {path: 'projet', component: ProjetComponent},

    {path: 'nouveau-projet', component: NouveauProjetComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
