import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: './admin-intranet/admin-intranet.module#AdminIntranetModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'error', loadChildren: 'app/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: 'app/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: 'app/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
