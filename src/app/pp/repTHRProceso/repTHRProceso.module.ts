import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepTHRProcesoRoutingModule } from './repTHRProceso-routing.module';
import { RepTHRProcesoComponent } from './repTHRProceso.component';
import { MzCollapsibleModule, MzIconMdiModule, MzCardModule, MzButtonModule, MzInputModule } from 'ng2-materialize';
import { FormsModule } from '@angular/forms';
import { EtapasProcesoService } from '../etapasproceso.service';

@NgModule({
    imports: [
        CommonModule,
        RepTHRProcesoRoutingModule,
        MzCollapsibleModule,
        MzIconMdiModule,
        MzCardModule,
        MzButtonModule,
        MzInputModule,
        FormsModule
    ],
    declarations: [RepTHRProcesoComponent],
    providers: [EtapasProcesoService]
})

export class RepTHRProcesoModule {}
