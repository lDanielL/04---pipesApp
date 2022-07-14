import { NgModule } from '@angular/core';
// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';





@NgModule({
  exports: [
    CardModule,
    FieldsetModule,
    MenubarModule,
    ButtonModule,
    ToolbarModule,
    TableModule

  ]
})
export class PrimeNgModule { }
