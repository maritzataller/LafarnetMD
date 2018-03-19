import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadosComponent } from './certificados.component';


const routes: Routes = [
    {
        path: '', component: CertificadosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CertificadosRoutingModule {
}
