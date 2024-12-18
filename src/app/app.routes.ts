import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewbookComponent } from './pages/viewbook/viewbook.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full' },
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'viewBook',component:ViewbookComponent},
    {path:'addbook',component:AddBookComponent},
    
];
